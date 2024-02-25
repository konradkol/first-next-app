import Link from 'next/link';
import { Card } from 'flowbite-react';

export default function Page() {
  return (
    <div className=" flex justify-center min-h-screen">
      <Card className="m-10 bg-slate-600">
        <h1 className="text-3xl font-bold text-center">
          NEXT.JS - nowoczesny framework
        </h1>
        <Link className="text-xl underline text-center" href={'/posts'}>
          Kliknij
        </Link>
      </Card>
    </div>
  );
}
