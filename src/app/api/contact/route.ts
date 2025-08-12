import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Here you would typically send an email or save to database
    // For now, we'll just return a success response
    
    console.log('Contact form submission:', body)
    
    return NextResponse.json(
      { message: 'Thank you for your inquiry! We will contact you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}