import logo from './logo.svg';
import './basics.css';

let varr="<b>that's the variable</b>";  //by default these bold tags will have no effect on jsx (safety features)
function StartingReact(){
  return (
    <>
      {/* here there are 2 main elements h1 and div(below) if we have not wrapped them inside <></> react will throw an error */}
      <h1 style={{backgroundColor: "cyan",height: "7vh",margin:"0",padding:"0"}}>Sample Heading {varr}</h1>  {/*inline styling in jsx*/}
      <nav className="navbar">
        <ul>
          <li>Home</li><li>About</li><li>Contact Us</li>
        </ul>
      </nav>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />  {/*including imported logo from logo.svg*/}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error nobis exercitationem obcaecati nisi modi.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Goto ReactJs.org</a>
        </header>
      </div>
    </>
  );
}

export default StartingReact;  //example of default export
export {varr};  //normal export