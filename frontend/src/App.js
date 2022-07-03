import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { Component } from "react";

import AddAddress from "./components/add-address.component";
import Address from "./components/address.component";
import AddressList from "./components/address-list.component";
import ErrorBoundary from './components/error.component';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/address"} className="navbar-brand">
            antony
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/address"} className="nav-link">
                Address
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<AddressList/>}  />
            <Route exact path="/address" element={<AddressList/>} />
            <Route exact path="/add" element={<AddAddress/>} />
            <Route path="/address/:id" element={<Address/>} />
          </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    );
  }
}
export default App;