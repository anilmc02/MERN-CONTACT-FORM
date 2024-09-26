##MERN Contact Form
A simple contact form where users can submit their details (name, email, and message). This application is built using a React frontend with a Node.js backend and MongoDB for data storage.

Features
Form Submission: Users can submit their name, email, and a message through the contact form.
Contact Management: Submitted contact details are stored in a MongoDB database and can be retrieved for viewing.
Contact Viewing: Users can view a list of contacts and see individual contact details.
Web3Forms Integration: The form integrates with Web3Forms for alternative form handling.
Technologies
Frontend: React, React Router
Backend: Node.js, Express.js
Database: MongoDB
Styling: CSS
Web3Forms: Integration for form submission
Installation
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/mern-contact-form.git
Install Backend Dependencies
Navigate to the server directory and install the dependencies:

bash
Copy code
cd server
yarn install
Install Frontend Dependencies
Navigate to the client directory and install the dependencies:

bash
Copy code
cd client
yarn install
Configure Environment Variables
Create a .env file in the server directory with the following content:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
Replace your_mongodb_connection_string with your MongoDB connection string and your_web3forms_access_key with your Web3Forms access key.

Run the Application
Start the Backend Server
bash
Copy code
cd server
yarn start
Start the Frontend Development Server
bash
Copy code
cd client
yarn start
Access the Application
Open your browser and navigate to http://localhost:3000 to use the application.

API Endpoints
POST /api/contact: Submit a new contact
GET /api/contact: Retrieve a list of all contacts
GET /api/contact/
: Get details of a specific contact
Contributing
Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Create a new Pull Request
Contact
If you have any questions, feel free to reach out to anilmc002@gmail.com.
