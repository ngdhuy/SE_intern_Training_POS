import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>http://localhost:3000/
          <div>
            <Header />
            <Sidebar />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}