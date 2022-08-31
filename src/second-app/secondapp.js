// in this app we will be dealing with class based components
import React, { Component } from 'react';
import MainComp from './components/maincomponent';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  //importing react router files

export default class Secondapp extends Component { // in class based components this keyword is used for referencing to class elements
  render() {
    return (
      <div>
        <Router>  {/*for using switch we need to wrap it inside router */}
          <Navbar/> {/*we need to include this inside router, else error will be raised because it will not able to find the path */}
          <Routes>  {/* A <Routes> looks through its children <Route>'s and renders the first one that matches the current URL. */}
          {/* providing unique key to maincomp because without it component will not re-render on changing type, as it treated as
            similar on changing type being same it updates without rendering, but the news according to type is visible on
            reloading the page, key makes every component unique which is rendered when required*/}
            <Route exact path="/" element={<MainComp pageSize={12} Country="in" Category="general" key="home"/>}/>
            <Route exact path="/business" element={<MainComp pageSize={12} Country="in" Category="business" key="business"/>}/>            
            <Route exact path="/entertainment" element={<MainComp pageSize={12} Country="in" Category="entertainment" key="entertainment"/>}/>
            <Route exact path="/general" element={<MainComp pageSize={12} Country="in" Category="general" key="general"/>}/>
            <Route exact path="/health" element={<MainComp pageSize={12} Country="in" Category="health" key="health"/>}/>
            <Route exact path="/science" element={<MainComp pageSize={12} Country="in" Category="science" key="science"/>}/>
            <Route exact path="/sports" element={<MainComp pageSize={12} Country="in" Category="sports" key="sports"/>}/>
            <Route exact path="/technology" element={<MainComp pageSize={12} Country="in" Category="technology" key="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
