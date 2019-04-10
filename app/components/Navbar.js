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
          <span>a</span>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <span>b</span>
        </Link>
      </li>
    </ul>
  </nav>
);
