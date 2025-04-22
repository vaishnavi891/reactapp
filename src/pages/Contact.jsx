import React from 'react';
import './Contact.css';  

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need support, feel free to reach out to us!</p>

      <div className="contact-details">
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
      </div>

      <h3>Send us a message</h3>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
