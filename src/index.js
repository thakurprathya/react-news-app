import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
// import StartingReact from './basics/basics';  //including our basic file js file which we exported as default its alias name can be any of our choice
// import { varr } from './basics/basics';  //normal export example, its alias should be same as used in file else error will be raised
// import FirstApp from './first-app/firstapp';
// import SecondApp from './second-app/secondapp';
import ThirdApp from './third-app/thirdapp';

const root = ReactDOM.createRoot(document.getElementById('root'));  //searching for root element and creating a react root
root.render(
  <React.StrictMode>
   {/* <StartingReact/> */} {/*including our first basic page component after importing, for running this site proper view donot include bootstrap in index.html*/}
   {/* { console.log(varr) }  printing varr in console which we exported normally */}
   {/* <FirstApp/> */}
   {/* <SecondApp/> */}
   {<ThirdApp/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
