import { hash } from '@/app/libs/argon';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, name, password } = await request.json();

  const hashedPassword = await hash(password);

  const { password: newPassword, ...user } = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
