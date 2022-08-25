//code for darkmode on whole page is written here only and in linked components
import "./firstapp.css";
import React, { useState } from "react";
import NAV from './components/navbar';  //default export of navbar
import Txt from './components/textform';  //default exporting textform
import Form from './components/formdarkmode';
import Alert from './components/alert';

function FirstApp(){
  const [mode, setmode]= useState("light"); //creating a new state which will help in setting whole page in darkmode
  const togglemode= ()=>{  //creating function
      if(mode === "light"){
        setmode("dark");
        document.body.style.backgroundColor= "rgb(28, 38, 77)";
        showAlert("DarkMode Enabled","Success!!!","success");
      }
      else{
        setmode("light");
        document.body.style.backgroundColor= "rgb(217, 218, 219)";
        showAlert("LightMode Enabled","Success!!!","success");
      }
  }

  const [alert, setAlert]= useState(null);  //creating a new state for auto dismissing alert message
  const showAlert= (msg, head, typ)=>{  //function for showing alert and dismissing it automatically
    setAlert({message: msg, heading: head, type: typ});
    setTimeout(() => {
      setAlert(null);
    }, 1500); //1.5sec
  }
  return (
    <>
      <NAV title="TITLE" mode={mode} togglemode={togglemode}/>  {/*creating it a prop*/}
      <Alert alert={alert}/>
      <div className="container">
        <Txt brief="Enter the text to Convert to UpperCase" heading="This is my Heading" mode={mode} alert={showAlert}/>
      </div>
      <Form/>
    </>
  );
}

export default FirstApp;