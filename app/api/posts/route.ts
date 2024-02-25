import { NextResponse } from 'next/server';

import data from '@/data.json';

export async function GET() {
  const posts = data.posts;
  return NextResponse.json(posts);
}
