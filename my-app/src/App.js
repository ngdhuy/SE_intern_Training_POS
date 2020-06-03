("./db");
import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import Login from "./components/login";
import Profile from "./components/frofile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

const isLoggedIn = () => {
  return localStorage.getItem('TOKEN_KEY') != null;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
    
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export default class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
          <div>
            {isLoggedIn() && (
              <>
                <Header /> 
                <Sidebar />
              </>
            )}
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <SecuredRoute path="/dashboard" component={Dashboard} />
            {isLoggedIn() && <Footer />}
          </div>
        </Switch>
      </Router>
    );
  }
}