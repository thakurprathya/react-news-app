import React from 'react'
import loading from "../loading.gif"

const Loader =()=>{
    return (
      <div className='text-center mt-5 my-3'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Loader;