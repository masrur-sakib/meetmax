import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { users } from '@/data/users';

// export async function GET() {
//   return new NextResponse('Get Request!');
// }

export async function POST(request) {
  console.log('working');
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  //   Email Duplicate Check
  const userFromDB = users.find((user) => user.email === email);
  if (userFromDB) {
    return NextResponse.json(
      { error: 'Email already exists' },
      { status: 400 }
    );
  }

  // Create user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);

  return NextResponse.json({
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
}
