'use client';

import { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const Post = ({ params }: { params: { postId: string } }) => {
  const [state, setState] = useState<{
    id?: number;
    title?: string;
    date?: string;
    summary?: string;
    content?: string;
  }>({});

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/posts/${params.postId}`,
    );
    const data = await response.json();
    setState(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center h-dvh">
      <Card className="m-10 bg-slate-400">
        <span>Post nr {params.postId}</span>
        {state.date && <p>{new Date(state?.date).toLocaleDateString()}</p>}
        <h1 className="mb-10 text-4xl font-bold">{state?.title}</h1>
        <h2 className="text-2xl">{state?.summary}</h2>
        <p className="text-base">{state?.content}</p>
      </Card>
    </div>
  );
};

export default Post;
