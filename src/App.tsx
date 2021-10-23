import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/common/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={About} path="/about" exact />
        <Route component={Login} path="/sign-in" exact />
        <Route component={Register} path="/sign-up" exact />
        {/* <Route component={ProductDetails} path=':id' exact /> */}
        {/* <Route exact path="/products/:id" component={ProductDetails} /> */}
      </Switch>
    </>
  );
}

export default App;
