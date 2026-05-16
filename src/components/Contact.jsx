import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.send(
      "service_jo8hl0h",  
      "template_y3foe0r",     
      form,
      "vupllPlle7Z1zboXs"  
    )
    .then(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("error");
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-info-box">
          <h3>Let's Connect </h3>
          <p>
            I'm open to internships, freelance work, and full-time opportunities.
            Feel free to reach out!
          </p>

          <p><strong>Email:</strong> thevinayjpp@gmail.com</p>
          <p><strong>Location:</strong> Mumbai, India</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="success-msg"> Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg"> Failed to send. Try again.</p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contact;
