import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
     <Switch>
        <Route path= '/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
