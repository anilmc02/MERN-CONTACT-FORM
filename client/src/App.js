import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
