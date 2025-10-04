import React from "react";

function Testimonials() {
  const reviews = [
    { name: "Aman Sharma", text: "The best IELTS coaching. I scored 7.5 bands in my first attempt!" },
    { name: "Priya Verma", text: "Flexible timings helped me prepare along with my job. Highly recommended." },
    { name: "Rahul Mehta", text: "Expert trainers and helpful study material. Got my dream score!" }
  ];

  return (
    <section id="testimonials" style={{ padding: "50px", textAlign: "center", background: "#f9f9f9" }}>
      <h2>What Our Students Say</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "20px" }}>
        {reviews.map((item, index) => (
          <div key={index} style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}>
            <p>"{item.text}"</p>
            <h4 style={{ marginTop: "10px", color: "#1e3a8a" }}>- {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;