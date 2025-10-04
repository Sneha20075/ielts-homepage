import React from "react";

function Features() {
  const features = [
    { title: "Expert Trainers", desc: "Learn from certified IELTS trainers with years of experience." },
    { title: "Flexible Timings", desc: "Morning, evening and weekend batches available." },
    { title: "Affordable Fees", desc: "High quality training at reasonable prices." }
  ];

  return (
    <section id="features" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Our Features</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "20px" }}>
        {features.map((item, index) => (
          <div key={index} style={{
            width: "250px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;