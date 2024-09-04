import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formWithKey = {
      ...formData,
      access_key: "9af93ae9-7119-4317-8c70-7354d8b8b16f", // Replace with your actual Web3Forms access key
    };

    try {
      // Send data to Web3Forms
      await axios.post("https://api.web3forms.com/submit", formWithKey);

      // Send data to your backend
      await axios.post("http://localhost:5000/api/contact", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the previous page
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        {!isSubmitted && (
          <div className="contact-left-title">
            <h2>Contact Form</h2>
            <hr />
          </div>
        )}
        {isSubmitted ? (
          <div className="success-message">
            <img src="/assets/tick.png" alt="Tick" className="tick-icon" />
            <p>Form submitted successfully!</p>
            <p> Thank You! The form has been submitted successfully.</p>
            <p>We will reply to you soon.</p>
            <button className="go-back-button" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                ></textarea>
              </div>
              <button type="submit">
                Submit <img src="/assets/arrow_icon.png" alt="" />
              </button>
            </form>
            {!isSubmitted && (
              <div className="view-contacts-container">
                <button
                  type="button"
                  className="view-contacts-button"
                  onClick={() => navigate("/contacts")}
                >
                  View Contacts
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="contact-right">
        <img src="/assets/right_img.png" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
