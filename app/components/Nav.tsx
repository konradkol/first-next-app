'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'flowbite-react';

import { FlowbiteLogo } from './FlowbiteLogo';

export default function Nav() {
  return (
    <Navbar className="bg-slate-100" fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <FlowbiteLogo />
        <span className="self-center whitespace-nowrap ml-2 text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link as={Link} href="/posts">
          Posts
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
