import React from "react";
import Link from "next/link";

const linkStyle = {
  textDecoration: "underline",
  color: "#3366BB",
  cursor: "pointer",
};

export default () => (
  <nav className="nav">
    <ul>
      <li>
        <Link href="/">
          <span style={linkStyle}>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/a">
          <span style={linkStyle}>Page a</span>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <span style={linkStyle}>Page b</span>
        </Link>
      </li>
    </ul>
  </nav>
);
