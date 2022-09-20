import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import NewPost from "./pages/NewPost";

//Starting page
//route: /

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newPost">Create new Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
