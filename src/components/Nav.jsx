import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Nav() {
  return (
    <div id="navbar">
      <Link className="btn btn-dark" to="/">Home</Link>
      <Link className="btn btn-danger" to="/red">Red</Link>
      <Link className="btn btn-success" to="/green">Green</Link>
      <Link className="btn btn-primary" to="/blue">Blue</Link>
    </div>
  );
}
