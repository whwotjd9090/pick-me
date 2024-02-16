"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import LogoIcon from "@/public/logo_icon.png";

export default function Header() {
  return (
    <header className="w-full max-w-screen-lg mx-auto fixed top-0">
      <Navbar fluid={true}>
        <Navbar.Brand href="/">
          <Image
            src={LogoIcon}
            alt="pickme brand logo icon"
            className="mr-3 h-6 sm:h-9"
            width={32}
            height={32}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            PICK ME
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>Home</Navbar.Link>
          <Navbar.Link href="/">내 정보</Navbar.Link>
          <Navbar.Link href="/">헤더 메뉴</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}