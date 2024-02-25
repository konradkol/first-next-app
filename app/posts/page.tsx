'use client';

import { useEffect, useState } from 'react';
import { ListGroup } from 'flowbite-react';

export default function Page() {
  const [state, setState] = useState<{ id: number; title: string }[]>([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/posts/');
    const data = await response.json();
    setState(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center m-10 min-h-full">
      <h1 className="m-10 text-4xl">Nowoczesny WebDev</h1>
      <ListGroup className="bg-slate-100">
        <ul>
          {state.map(({ id, title }) => (
            <ListGroup.Item className="text-lg" key={id} href={`/posts/${id}`}>
              {title}
            </ListGroup.Item>
          ))}
        </ul>
      </ListGroup>
    </div>
  );
}
