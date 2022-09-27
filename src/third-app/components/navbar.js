import React from 'react'
import { Link } from 'react-router-dom'; //will use link instead of anchor tag for connecting it with router dom, it will go to link without reloading

const Navbar =()=>{
    return (
      <div>
        {/* including bootstrap navbar and making changes to it for acceptance in jsx, also replacing anchor tag with
        Link of react-router-dom ,and href with to for use router */}
        <nav className={`navbar fixed-top navbar-expand-lg bg-black`}>{/*including js that's why use backticks, black is more dark than dark that's why using it */}
            <div className="container-fluid" style={{display:"flex", justifyContent:"flex-start"}}>
                <Link className={`navbar-brand text-light my-2`} to="/" style={{fontWeight:"bold", fontSize:"25px", marginRight:"95px", marginLeft:"10px"}}>News React App</Link>
                {/* <a className={`navbar-brand text-light my-2`} href="/" style={{fontWeight:"bold", fontSize:"25px", marginRight:"100px", marginLeft:"15px"}}>News React App</a>*/}
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0' style={{fontSize:"17px"}}>  {/*overwriting bootstrap class size by providing size*/}
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/">Home</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/business">Business</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/entertainment">Entertainment</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/health">Health</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/science">Science</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/sports">Sports</Link></li>
                    <li className='nav-item'><Link className={`nav-link text-light px-0 py-0 my-0 mx-0`} to="/technology">Technology</Link></li>
                    {/* <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/">Home</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/business">Business</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/entertainment">Entertainment</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/health">Health</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/science">Science</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/sports">Sports</a></li>
                    <li className='nav-item'><a className={`nav-link text-light px-0 py-0 my-0 mx-0`} href="/technology">Technology</a></li> */}
                  </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar;