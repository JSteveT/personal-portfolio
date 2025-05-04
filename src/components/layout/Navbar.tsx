"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "10%",
        right: "0",
        transform: "translateY(-50%)",
        background: "transparent",
        padding: "1rem",
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#hero" style={linkStyle}>
            Intro
          </a>
        </li>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "0.5rem 1rem",
  transition: "background 0.3s ease",
};
