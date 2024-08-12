# Dynamic One-Page Website with React

This project is a dynamic one-page website built with React, featuring a banner with a countdown timer and an internal dashboard for managing banner settings. The backend is implemented using an in-memory database for simplicity and can be easily adapted to use MySQL if needed.

## Features

- **Website Layout:** A simple, clean one-page layout that optionally displays a banner.
- **Frontend Countdown Display:** A countdown timer on the banner, showing the remaining time before it disappears.
- **Internal Dashboard:** Allows users to:
  - Toggle the banner's visibility.
  - Update the banner's description.
  - Set a timer for how long the banner is displayed.
  - Add a clickable link to the banner.
- **Database Integration:** Uses an in-memory database to store the banner's content, including description, timer settings, and link.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** In-memory (easy to switch to MySQL)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

## Branch Structure

- **Frontend Code:** Located in the `frontend` branch.
- **Backend Code:** Located in the `backend` branch.

#### Frontend

1. **Switch to the frontend branch and clone the repository:**

   ```bash
   git clone -b frontend <repository-url> frontend
   cd frontend
2. ***Install frontend dependencies:***
    ```bash
    npm install


3 .***Backend***  Switch to the backend branch and clone the repository:
   


4.***Install backend dependencies:***

bash

npm install
Running the Application
5 ***Frontend
Navigate to the frontend directory:***


cd frontend
Start the frontend server:

npm start
This will start the React application on http://localhost:3000.

6.***Backend
Navigate to the backend directory:***



cd backend
Start the backend server:

npm start
The backend server will run on http://localhost:5000.



***Switching to MySQL (Optional)
If you need persistent data storage and choose to use MySQL:***

***Set up a MySQL database.***

Update the backend configuration to connect to your MySQL database.

Install necessary MySQL packages:



npm install mysql
Modify database queries to use MySQL.

Note: The backend uses an in-memory database, which allows for simple hosting and quick setup. Data will not persist after the server is restarted. If you require persistent storage, consider switching to MySQL.
 Additionally, starting the backend server might take some time; please be patient while it initializes.
