// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/profile">Profile</Link> | <Link to="/post/1">Post 1</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  </div>
);

export default Home;
