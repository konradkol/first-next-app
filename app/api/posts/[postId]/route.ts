import { NextResponse } from 'next/server';

import data from '@/data.json';

export async function GET(
  _req: Request,
  { params }: { params: { postId: string } },
) {
  const posts = data.posts;
  const post = posts.filter((p) => p.id === parseInt(params.postId))[0];
  return NextResponse.json(post);
}
