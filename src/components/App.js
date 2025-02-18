import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Landingpage from "./Landingpage";
import Searchpage from "./Searchpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flightbooking from "./Flightbooking";
import Bookingconfirmation from "./Bookingconfirmation";

const App = () => {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <Header/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/flight-search" element={<Searchpage />} />
          <Route path="/flight-booking" element={<Flightbooking />} />
          <Route path="/confirmation" element={<Bookingconfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
