import React from "react";
import Link from "next/link";

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <Link href="/">
          <span>home</span>
        </Link>
      </li>
      <li>
        <Link href="/a">
          <span>Page a</span>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <span>Page b</span>
        </Link>
      </li>
    </ul>
  </nav>
);
