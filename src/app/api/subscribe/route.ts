import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().max(100).optional(),
  email: z.string().email(),
})

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://accounts.zoho.eu/oauth/v2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: 'refresh_token',
    }).toString(),
  })
  const data = (await res.json()) as { access_token?: string; error?: string }
  if (!data.access_token) throw new Error(`Zoho token error: ${data.error}`)
  return data.access_token
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 422 })
  }

  const { name, email } = parsed.data

  try {
    const accessToken = await getAccessToken()

    const contactInfo = JSON.stringify({
      'Contact Email': email,
      ...(name ? { 'First Name': name } : {}),
    })

    const params = new URLSearchParams({
      resfmt: 'JSON',
      listkey: '3z834b858570054b8a30ab29dd9462a6d8',
      contactinfo: contactInfo,
    })

    const res = await fetch(
      `https://campaigns.zoho.eu/api/v1.1/json/listsubscribe?${params.toString()}`,
      {
        method: 'POST',
        headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
      }
    )

    const data = (await res.json()) as { status?: string; message?: string }

    if (
      data.status === 'success' ||
      data.message?.toLowerCase().includes('already')
    ) {
      return NextResponse.json({ success: true })
    }

    console.error('[subscribe] Zoho error response:', data)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  } catch (err) {
    console.error('[subscribe] Error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 502 })
  }
}
