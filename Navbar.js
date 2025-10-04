import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#1e3a8a",
      color: "white"
    }}>
      <h2>IELTS Institute</h2>
      <div>
        <a href="#home" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Home</a>
        <a href="#features" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Features</a>
        <a href="#testimonials" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Testimonials</a>
        <a href="#contact" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;