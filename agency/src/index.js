  import React from 'react';
  import ReactDOM from 'react-dom';

  import './index.css';

  import reportWebVitals from './reportWebVitals';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  import Home from './pages/home';
  import Contact from './pages/contact';

  function App() {
    return (
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
