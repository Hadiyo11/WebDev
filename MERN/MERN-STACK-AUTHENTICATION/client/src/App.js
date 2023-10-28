import React from "react"
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from './components/Home'

const App = () =>{
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Home" component={Home}/>
      </Switch></BrowserRouter>
  )
}

export default App;
