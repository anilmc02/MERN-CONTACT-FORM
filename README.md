MERN Contact Form
This is a contact form built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to submit their contact details, which are saved in a MongoDB database. The application provides a frontend for submitting contact information and a backend API for handling form submissions.

Features
Frontend built with React
Backend API built with Node.js and Express
MongoDB database for storing contact form submissions
Contact details are displayed on a separate details page
Full CRUD capabilities (Create, Read)
Axios used for API requests
Web3Forms integration for form submission
Custom CSS for styling
Prerequisites
Node.js (v14 or later)
MongoDB (Local or Cloud-based like MongoDB Atlas)
npm or yarn for package management
React Router for navigation
Getting Started
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/mern-contact-form.git
cd mern-contact-form
2. Install dependencies
For the backend (server):
bash
Copy code
cd server
npm install
For the frontend (client):
bash
Copy code
cd client
npm install
3. Set up environment variables
Create a .env file in the server directory with the following content:

bash
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/test
4. Start MongoDB
Ensure that MongoDB is running locally or configure it to connect to a cloud instance.

bash
Copy code
mongod
5. Run the backend
Start the Express server by running the following command in the server directory:

bash
Copy code
npm start
The backend server will run on http://localhost:5000.

6. Run the frontend
Start the React frontend by running the following command in the client directory:

bash
Copy code
npm start
The frontend will run on http://localhost:3000.

API Endpoints
1. Get all contacts
bash
Copy code
GET /api/contact
Fetches all the contact form submissions stored in MongoDB.

2. Add a new contact
bash
Copy code
POST /api/contact
Creates a new contact form submission.

Payload:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Hello, this is a message!"
}
3. Get contact by ID
bash
Copy code
GET /api/contact/:id
Fetches a specific contact form submission by its ID.

Components
1. ContactForm.js
This component renders the contact form, handles user input, and sends the form data to both Web3Forms and your backend.

Features:
Uses axios to post form data.
Handles form validation and submission.
Displays a success message upon form submission.
2. ContactList.js
Displays a list of all contacts stored in the database, fetched via a GET request to the backend.

Features:
View all contact submissions.
Select and view contact details in a modal.
3. ContactDetails.js
This component displays detailed information about a specific contact based on the contact ID fetched from the URL.

Features:
Uses useParams from react-router-dom to capture the contact ID.
Fetches contact details via axios.
CSS Files
1. ContactForm.css
Styles the contact form and handles responsive design. Below is a summary of some key styles:

Classes Used:
.contact-container: Overall layout for the contact form.
.contact-left, .contact-right: Split the form into two sections.
.contact-input: Input fields are styled with this class.
.success-message: Styled for displaying a success message after form submission.
.go-back-button: Button for navigating back after submission.
2. ContactList.css
Styles the contact list, table, and contact details display.

Classes Used:
.contact-list: Container for the contact list table.
.contact-details: Used to display detailed information for a selected contact.
.back-to-form-button: Styled button for navigating back to the form.
3. ContactDetails.css
Styles the detailed view of an individual contact, including labels and layout.

Classes Used:
.contact-details: Container for showing individual contact details.
<strong> tags for labels such as name, email, and message.
Backend
server.js
The main entry point for the Express server. It connects to MongoDB, uses middleware for JSON parsing and CORS, and sets up routes.

db.js
Contains MongoDB connection logic using mongoose. Ensures a successful connection and handles errors.

contact.js (Route)
Defines API routes for managing contacts. It supports the following operations:

GET /api/contact – Fetch all contacts.
POST /api/contact – Create a new contact.
contact.js (Model)
Defines the schema for storing contacts in MongoDB using mongoose.

Running Tests
You can manually test API endpoints using Postman or cURL.

Test the form submission:

Use Postman or the frontend form to submit new contacts to the /api/contact endpoint.

Test fetching contacts:

Send a GET request to /api/contact and check if the list of contacts is correctly returned.

Future Enhancements
Add input validation to the contact form.
Add unit tests for both frontend and backend.
Implement pagination for the contact list.
Add error handling and notifications for failed form submissions.
Improve the UI with more responsive and accessible design.
License
This project is licensed under the MIT License - see the LICENSE file for details.
