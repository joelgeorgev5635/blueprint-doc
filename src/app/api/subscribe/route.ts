import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().max(100).optional(),
  email: z.string().email(),
})

// These are public embed keys — already present in the client-side Zoho JS
const ZOHO_LIST_KEY = '3z834b858570054b8a30ab29dd9462a6d8'
const ZOHO_FORM_KEY = '3z9ba00add35d13b43926cf4d828f82193fd0672a7ccfa2fdd9558dd7645b5f715'

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

  const params = new URLSearchParams({
    zc_trackCode: 'ZCFORMVIEW',
    submitType: 'optinCustomView',
    lD: ZOHO_LIST_KEY,
    emailAddr: email,
    firstName: name ?? '',
    zcld: ZOHO_FORM_KEY,
    formType: 'GenericForm',
    zx: '',
  })

  try {
    const res = await fetch('https://maillist-manage.zoho.eu/weboptin.do', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'https://blueprintdoc.co.uk',
        'Origin': 'https://blueprintdoc.co.uk',
      },
      body: params.toString(),
    })

    const text = await res.text()

    // Zoho returns a redirect or success HTML — treat any non-server-error as success
    if (res.status < 500) {
      return NextResponse.json({ success: true })
    }

    console.error('[subscribe] Zoho error:', res.status, text.slice(0, 200))
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  } catch (err) {
    console.error('[subscribe] Failed to reach Zoho:', err)
    return NextResponse.json({ error: 'Failed to reach email provider' }, { status: 502 })
  }
}
