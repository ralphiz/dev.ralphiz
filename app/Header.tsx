import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="flex flex-row p-5 bg-blue-500">
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link href="https://github.com/ralphiz">Github</Link>
          </li>
          <li>
            <Link href="https://twitter.com/ralphiz">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/ralphcacho/">LinkedIn</Link>
          </li>
          <li>
            <Link href="http://instagram.com/ra7phiz">Instagram</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
