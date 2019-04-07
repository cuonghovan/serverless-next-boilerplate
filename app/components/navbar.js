import React from "react";
import Link from "next/link";

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <Link href="/"><a>home</a></Link>
      </li>
      <li>
        <Link href="/a"><a>a</a></Link>
      </li>
      <li>
        <Link href="/b"><a>b</a></Link>
      </li>
    </ul>
  </nav>
);
