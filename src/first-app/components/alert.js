import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{props.alert.heading}</strong>  {props.alert.message}
        </div>
    </div>
  )
}

//we use an important syntax above which is used to prevent errors(used and operator), what it means is it will first
//evaluate props.alert if it is false(null) will not move forward, and if true will move forward
//this happens because all the JSX will be converted to javaScript calls
