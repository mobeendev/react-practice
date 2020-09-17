import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";
import { useAuth0 } from "./context/auth0-context";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const { getToken, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) getUserData();
  }, []);

  async function getUserData() {
    const token = await getToken();

    console.log(token);

    // we have data!
  }

  return (
    <Router>
      <div className="app">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
