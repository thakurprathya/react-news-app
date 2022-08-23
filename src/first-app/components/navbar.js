import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props){
  return (
    <>
        {/* including bootstrap navbar and making changes to it for acceptance in jsx */}
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white " href="/" style={{fontWeight:"bold"}}>{props.title}</a> {/*now have to pass title to navbar*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
  </>
  )
}

// navbar.propTypes= {title: PropTypes.string};  //we define the proptypes which set type of title as string
navbar.propTypes= {title: PropTypes.string.isRequired};  //is required makes it necessary for us to provide with title, default props will work
navbar.defaultProps= {title: "Set title here"};  //setting default props if we donot provide it with props this will print
