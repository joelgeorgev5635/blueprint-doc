import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().max(100).optional(),
  email: z.string().email(),
})

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

  const listKey = process.env.ZOHO_LIST_KEY
  const authToken = process.env.ZOHO_AUTH_TOKEN

  if (!listKey || !authToken) {
    console.error('[subscribe] Missing ZOHO_LIST_KEY or ZOHO_AUTH_TOKEN env vars')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const contactInfo = JSON.stringify({
    'Contact Email': email,
    ...(name ? { 'First Name': name } : {}),
  })

  const params = new URLSearchParams({
    authtoken: authToken,
    resfmt: 'JSON',
    listkey: listKey,
    contactinfo: contactInfo,
  })

  try {
    const res = await fetch(
      `https://campaigns.zoho.eu/api/v1.1/json/listsubscribe?${params.toString()}`,
      { method: 'POST' }
    )

    const data = (await res.json()) as { status?: string; message?: string; code?: string }

    // Zoho returns status "success" for new subscribers, and a specific message for duplicates
    if (
      data.status === 'success' ||
      data.code === 'success' ||
      data.message?.toLowerCase().includes('already')
    ) {
      return NextResponse.json({ success: true })
    }

    console.error('[subscribe] Zoho error response:', data)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  } catch (err) {
    console.error('[subscribe] Failed to reach Zoho:', err)
    return NextResponse.json({ error: 'Failed to reach email provider' }, { status: 502 })
  }
}
