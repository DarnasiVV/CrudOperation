import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddName from './StudentDetails/CreateStudentDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes,BrowserRouter,Route } from 'react-router-dom';
import Add from './DemoonStudentCreation/Add';
import StudentDetails from './StudentDetails/CreateStudentDetails';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Add/>}/>
        <Route path='/studentInformation' element={<StudentDetails/>}/>
       
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
