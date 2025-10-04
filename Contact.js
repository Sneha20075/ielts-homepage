import React from "react";

function Contact() {
  return (
    <section style={{ padding: "50px", textAlign: "center", background: "#f0f0f0" }}>
      <h2>Contact Us</h2>
      <form style={{ marginTop: "30px" }}>
        <input type="text" placeholder="Your Name" style={{ padding: "10px", margin: "5px" }} />
        <input type="email" placeholder="Your Email" style={{ padding: "10px", margin: "5px" }} />
        <textarea placeholder="Your Message" style={{ padding: "10px", margin: "5px" }}></textarea>
        <br />
        <button style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;