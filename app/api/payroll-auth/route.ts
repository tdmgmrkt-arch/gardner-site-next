import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'payroll_auth';
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const correctPassword = process.env.PAYROLL_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: COOKIE_MAX_AGE,
    path: '/payroll',
  });

  return response;
}

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
