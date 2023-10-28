import React from "react";
import { Link } from "react-router-dom"

const Register = () =>{
    return(
        <div className="form mt-5">
            <h4 className="text-muted text-center mb-5">Create an account</h4>
        <div className="card p-5 shadow">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="name" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password"/>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="mt-3 text-center">
                 Already a user? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
        </div>
    )
}