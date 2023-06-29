# SPORTSEE PROJECT:

This project is a web application that fetches data from an API or mock data and displays it in a user-friendly interface. The Recharts library is used to display data in analytics dashboard

## Features

- The project consists of two parts: a backend and a frontend.
- The backend is a Node.js server that provides the data from an API
- The frontend is a React app that consumes the data from the backend or mocked data

## Installation

To install the project, you need to have Node.js and npm installed on your machine. Then, follow these steps:

- Clone or download the backend repository from [this link](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and the frontend repository from [this link](https://github.com/johary1/sportsee) to your local machine.
- Navigate to the project folder and run `npm install` to install all the dependencies.

## Usage

To launch the project, you need to run both the backend and the frontend servers. Follow these steps:

- In one terminal, navigate to the `backend` folder and run `npm start` to start the backend server. It will listen on port 3000 by default.
- In another terminal, navigate to the `frontend` folder and run `npm start` to start the frontend server. It will open a browser window on port 3001 by default.
- You should see data fetched from the API or mock data. You can modify the boolean IS_MOCKED value in config.js to switch between data source either API or Mocked data.
