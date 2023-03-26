import React from 'react'
import '../componenet/header.css'
function header() {
  return (
    <div className='header'>
           <img  classname="header-logo" src="../assets/icon.png"></img>

          <div className="header search">
               <input type="text"  classname="header-search-input" name="" id="" />
          </div>
            

            <div className="header-nav">
                 <div className="header-option">
                    <span className="op1">one</span>
                 </div>
                 <div className="header-option">
                 <span className="op2">two</span>
                 </div>
                 <div className="header-option">
                 <span className="op3">three</span>
                 </div>
                 <div className="header-option">
                 <span className="op4">four</span>
                 </div>
            </div>
    </div>
  )
}

export default header