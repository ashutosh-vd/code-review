# Code Review AI

A web application that takes a JavaScript code snippet and provides a review of the code using AI.

## Technologies Used

- Frontend: React, Tailwind CSS, Vite
- Backend: Node.js, Express.js, Google's GenAI API
- Database: None

## Installation
1. Clone the repository
2. Install dependencies: `npm install` in both the `frontend` and `backend` directories
3. Start the development server: `npm run dev` in both the `frontend` and `backend` directories
4. Open [http://localhost:5173](http://localhost:5173) in your browser (The port may vary depending on your environment)
5. Open [http://localhost:5001](http://localhost:5001) in your browser to check the backend server (The port may vary depending on your environment)
## How it works (Under development)

1. User inputs a JavaScript code snippet in the text area
2. When the user clicks the "Review" button, the code is sent to the backend server
3. The backend server sends the code to the Google GenAI API
4. The GenAI API returns a review of the code in markdown format
5. The backend server sends the review back to the frontend
6. The frontend displays the review in a markdown format

## Features

- Get a review of your code using AI
- View the review in a markdown format
- Easy to use interface

<!-- ## Screenshots -->
