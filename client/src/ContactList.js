import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ContactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const navigate = useNavigate();

  // Fetch contacts from the backend
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contact");
      setContacts(response.data);
    } catch (error) {
      console.error("There was an error fetching contacts!", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseDetails = () => {
    setSelectedContact(null);
  };

  const handleBackToForm = () => {
    navigate("/"); // Navigate back to the ContactForm component
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => handleViewDetails(contact)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedContact && (
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            <strong>Name:</strong> {selectedContact.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p>
            <strong>Message:</strong> {selectedContact.message}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(selectedContact.date).toLocaleDateString()}
          </p>
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
      <button className="back-to-form-button" onClick={handleBackToForm}>
        Back to Contact Form
      </button>
    </div>
  );
};

export default ContactList;
