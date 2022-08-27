import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}> {/*adding it inside a div to prevent content shifting, as before using it contents shifts whenever alert shows */}
      {props.alert && <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.heading}</strong>  {props.alert.message}
          </div>
      </div>} {/*have to include this part in curly brackets as also using JS in it */}
    </div>
  )
}

//we use an important syntax above which is used to prevent errors(used and operator), what it means is it will first
//evaluate props.alert if it is false(null) will not move forward, and if true will move forward
//this happens because all the JSX will be converted to javaScript calls
