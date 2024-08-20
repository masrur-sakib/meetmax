import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '../lib/users';

export async function GET() {
  return new NextResponse('API Server Working!');
}

export async function POST(request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  if (getUserByEmail(email)) {
    return NextResponse.json(
      { error: 'Email already exists' },
      { status: 400 }
    );
  }

  const user = await createUser(name, email, password);
  return NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email },
  });
}
