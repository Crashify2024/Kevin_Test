import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically send an email or save to a database
  console.log('Received contact form submission:', body)

  // For now, we'll just return a success response
  return NextResponse.json({ message: 'Kontaktanfrage erfolgreich gesendet' })
}

