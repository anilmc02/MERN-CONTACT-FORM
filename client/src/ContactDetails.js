import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ContactDetails.css";

const ContactDetails = () => {
  const { id } = useParams(); // Get the contact ID from the URL
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/contact/${id}`
        );
        setContact(response.data);
      } catch (error) {
        console.error(
          "There was an error fetching the contact details!",
          error
        );
      }
    };

    fetchContactDetails();
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contact-details">
      <h3>Contact Details</h3>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Message:</strong> {contact.message}
      </p>
      <p>
        <strong>Date:</strong> {new Date(contact.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactDetails;
