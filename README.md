# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Code Structure

- Created three folder to handle functionality one for view i.e components, all the hooks are under hooks folder, contexts api under context folder
- In components, for different pages have different folder - Dashboard and Login
- There is one design-system where we can add our common used components like Button , Search, Input so that code can be reuseable and avoid same line of code in different files. And it also helps in UX consistency.
- There is one common utils file where we can add functions which can be reused anywhere.

## Notes

- Have used Context API (react hook) for authentications which will tell us whether user is authenticated or not with login and logout functions.
- On login creating a session which I am destroying on logout
- Once user is login and session is created, if user goes to login he will redirect to dashboard and vice-versa
- Using react router npm package fr routing
- Created useForm custom react hook to handle forms (login and new task modal)
- Using LocalStorage for storing tasks data and deleting it on logout.
- Used styled components for CSS-in-Js with
- Using React Chart npm package for showing pie chart in dashboard
