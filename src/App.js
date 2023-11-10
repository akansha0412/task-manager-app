// // App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Login from "./Login";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <Route path="/login">
//         {isLoggedIn ? (
//           <Redirect to="/dashboard" />
//         ) : (
//           <Login onLogin={handleLogin} />
//         )}
//       </Route>
//       <Route path="/dashboard">
//         {isLoggedIn ? (
//           <Dashboard onLogout={handleLogout} />
//         ) : (
//           <Redirect to="/login" />
//         )}
//       </Route>
//     </Router>
//   );
// }

// export default App;

// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { DashboardContainer } from "./components/Dashboard/DashboardContainer";
import { Login } from "./components/Login/Login";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute
            path="/dashboard"
            component={DashboardContainer}
          ></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

// Define a PrivateRoute component to protect the Dashboard route
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Replace this with your authentication logic
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
