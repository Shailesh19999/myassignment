import React from 'react'
import logo from "./img/t1.jpg"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light   " >
  <div className="container-fluid">
    <img src={logo}  alt="" />
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Candidates search" aria-label="Search"
        style={{width: "1400px"}}/>
        <h3><i class="fa fa-commenting" aria-hidden="true"></i><span className='alertbox'>Message</span></h3>
        <h3><i class="fa fa-bell mx-2" aria-hidden="true "></i><span className='alertbox'>Notification</span></h3>
        <h3><i class="fa fa-cog" aria-hidden="true"></i><span className='alertbox'>Setting</span></h3>
       
        
        
      </form>
    </div>
  </div>
</nav>
<hr style={{borderBottom:"3px solid grey"}}/>
      
    </>
  )
}

export default Navbar
