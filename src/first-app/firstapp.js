//code for darkmode on whole page is written here only and in linked components
import "./firstapp.css";
import React, { useState } from "react";
import NAV from './components/navbar';  //default export of navbar
import TxtForm from './components/textform';  //default exporting textform
import AboutForm from './components/formdarkmode';  //about form default export
import Alert from './components/alert';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  //importing react router files

function FirstApp(){
  const [mode, setmode]= useState("light"); //creating a new state which will help in setting whole page in darkmode
  const togglemode= ()=>{  //creating function
      if(mode === "light"){
        setmode("dark");
        document.body.style.backgroundColor= "rgb(28, 38, 77)";
        showAlert("DarkMode Enabled","Success!!!","success");
        document.title = "ReactLearning App-DarkMode"; //updating title of page
      }
      else{
        setmode("light");
        document.body.style.backgroundColor= "rgb(217, 218, 219)";
        showAlert("LightMode Enabled","Success!!!","success");
        document.title = "ReactLearning App-LightMode";
      }
  }

  const [alert, setAlert]= useState(null);  //creating a new state for auto dismissing alert message
  const showAlert= (msg, head, typ)=>{  //function for showing alert and dismissing it automatically
    setAlert({message: msg, heading: head, type: typ});
    setTimeout(() => {
      setAlert(null);
    }, 2000); //2sec
  }
  return (
    <>
      <Router>  {/*for using switch we need to wrap it inside router */}
        <NAV title="TITLE" mode={mode} togglemode={togglemode}/>  {/*creating it a prop*/}
        <Alert alert={alert}/>
        <Routes>  {/* A <Routes> looks through its children <Route>'s and renders the first one that matches the current URL. */}
          <Route exact path="/" element={  
            <div className="container">
            <TxtForm brief="Enter the text to Convert to UpperCase" heading="This is my Heading" mode={mode} alert={showAlert}/>
            </div>
          }/> {/*for / path, main path rendering aboutform component, set path in index.html, exact keyword is used for exact matching, if not present will done partial matching */}
          <Route exact path="/aboutform" element={<AboutForm/>}/>  {/*for /aboutform path, rendering aboutform component, set path in index.html */}
        </Routes>
      </Router>
    </>
  );
}

export default FirstApp;