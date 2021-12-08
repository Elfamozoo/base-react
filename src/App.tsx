import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<div>login</div>} />

        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
export default App;
