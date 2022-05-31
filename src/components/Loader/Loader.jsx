import React from 'react'
import './Loader.scss';

function Loader() {
  return (
    <div className='loader-container'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;