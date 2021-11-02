import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import allFlights from './components/allFlights';
import editFlight from './components/editFlight';
// import axios from 'axios';


function App() {
  return(
    <Router>
        <div>
        <Route exact path='/' component={allFlights} />
        <Route path='/admin/allFlights' component={allFlights} />  
        <Route path='/admin/editFlight' component={editFlight} />
            
        </div>
      </Router>  
  );
}

export default App;
