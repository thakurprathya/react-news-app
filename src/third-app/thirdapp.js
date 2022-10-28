// in this app we will be converting second app class based component to function based component
//function based component to class based component of news app we will be converting this app using hooks as using hooks
//we can do all those work which we are able to do using other variables in class based components
import React, {useState} from 'react';
import MainComp from './components/maincomponent';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  //importing react router files
import LoadingBar from 'react-top-loading-bar';  //importing top load bar package

const Thirdapp= ()=>{ // in class based components this keyword is used for referencing to class elements
  const pageSize = 12;  //defining variable in class for using in route
  const apiKey = process.env.REACT_App_SecondAppApiKey;//importing from .env file our environment variable as apikey used in main second app
  const [progress, setProgress] = useState(0);  //defining a state 
    return (
      <div>
        <Router>  {/*for using switch we need to wrap it inside router */}
          <Navbar/> {/*we need to include this inside router, else error will be raised because it will not able to find the path */}
          <LoadingBar color='#f11946' progress={progress} height={3}/>  {/*adding top loader*/}
          <Routes>  {/* A <Routes> looks through its children <Route>'s and renders the first one that matches the current URL. */}
          {/* providing unique key to maincomp because without it component will not re-render on changing type, as it treated as
            similar on changing type being same it updates without rendering, but the news according to type is visible on
            reloading the page, key makes every component unique which is rendered when required*/}
            <Route exact path="/" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="" key="home"/>}/>
            <Route exact path="/business" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="business" key="business"/>}/>            
            <Route exact path="/entertainment" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="entertainment" key="entertainment"/>}/>
            <Route exact path="/health" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="health" key="health"/>}/>
            <Route exact path="/science" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="science" key="science"/>}/>
            <Route exact path="/sports" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="sports" key="sports"/>}/>
            <Route exact path="/technology" element={<MainComp setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} Country="in" Category="technology" key="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default Thirdapp;