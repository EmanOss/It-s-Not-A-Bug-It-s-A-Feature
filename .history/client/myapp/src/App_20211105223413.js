import React, { Component } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
//import allFlights from './components/AllFlights';
//import editFlight from './components/editFlight';
import createFlight from './components/createFlight';
// import axios from 'axios';


function App() {
  return(
    <Routes>
        <div>
       {/* <Route exact path='/' component={allFlights} />
       <Route path='/admin/allFlights' component={allFlights} />  
  <Route path='/admin/editFlight' component={editFlight} /> */}
        <Route path='/admin/createFlight' component={createFlight} />

        </div>
      </Routes>  
  );
}

export default App;
