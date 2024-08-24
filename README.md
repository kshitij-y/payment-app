
# Payment App

This is a basic MERN (MongoDB, Express, React, Node.js) web application for managing payments. The project is still under development and will include features such as signing in, signing up, logging out, and sending money.

### Live Demo

You can access the live version of this app [here](https://payment-app-me18.onrender.com/).

## Features

- **Sign In:** Secure user authentication.
- **Sign Up:** Register a new account.
- **Log Out:** Securely log out of the application.
- **Send Money:** Transfer funds between users.

## Getting Started

To get started with this project on your local machine, follow the steps below.

### Prerequisites

Make sure you have the following installed on your device:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (either a local instance or MongoDB Atlas)

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kshitij-y/payment-app
   cd payment-app
 2. **Configure the Database:**

- use your own MongoDB instance.
- If you want to deploy use mongoDB Atlas

 3. **Backend Setup:**

- Navigate to the backend directory:

  ```bash
  cd backend
  npm install
  npm start
4. **Frontend Setup:**

- Navigate to the frontend directory:

  ```bash
  cd frontend
  npm install
  npm run dev
### Running the App

-   Open your browser and navigate to `http://localhost:5173` to start using the app.

### Deployment

The app is deployed on [Render](https://render.com/). To deploy the app yourself:

1.  Follow the instructions provided by Render for deploying a Node.js app.
2.  Make sure to set up environment variables in Render to store your MongoDB URI and any other sensitive data.

## Future Enhancements

This project is still in development. Planned features include:

-   Enhanced error handling and user feedback.
-   Improved UI/UX design.
-   Integration with a payment gateway.
-   Role-based access control for different types of users.
-	A admin page will be created for deposits
