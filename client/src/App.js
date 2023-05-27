import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from "./components/CustomersList";
import CustomerCreateUpdate from "./components/CustomerCreateUpdate";
import './index.css'

const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      Django React Demo
      <button className="navbar-toggler" 
              type="button" 
              data-toggle="collapse"  
              data-target="#navbarNavAltMarkup"  
              aria-controls="navbarNavAltMarkup"  
              aria-expanded="false" 
              aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarNavAltMarkup">
        <div  className="navbar-nav">
          <a  className="nav-item nav-link"  href="/">CUSTOMERS</a>
          <a  className="nav-item nav-link"  href="/customer">CREATE CUSTOMER</a>
        </div>
      </div>
    </nav>
    <div  className="content">
      <Routes>
        <Route  path="/"  exact  component={CustomerList}  />
        <Route  path="/customer/:pk"  component={CustomerCreateUpdate}  />
        <Route  path="/customer/"  exact  component={CustomerCreateUpdate}  />
      </Routes>
	</div>
  </div>
)

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <BaseLayout />
      </BrowserRouter>
    )
  }
}