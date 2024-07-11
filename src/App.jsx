// Importing the necessary modules 
import Home from './Components/Home/Home';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Creating a class app 
class App extends Component {
  // State 
  state = {}

  // Rendering the app component 
  render() {
    // Returning the component 
    return (
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
      </Routes>
      </BrowserRouter>
    )
  }
}

// Exporting the App component 
export default App; 
