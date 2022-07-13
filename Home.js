import React, { useState } from 'react'
import Data from './Data'

const Home = () => {
    const [detl,setDetl]= useState(Data)
    // console.log(detl)
    return (
        <>
            <div className="heading">
                <h2 className='heading1'>Suggested Candidates</h2>
                <h2 className='heading2'>Post a job <i className="fa fa-arrow-right" aria-hidden="true"></i></h2>

            </div>
            <div className="container-fluid">
                <div className="row">
                {detl.map((val)=>{
                    const{  title,profile,work1,para1,work2,para2,location,contant, image}= val
                    return(
                        <>
                        <div className="col-12">
                    
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title">{title}</h5>
                                <div className="myimg">
                                    <img src={image} alt="" />
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{profile}</h6>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-briefcase me-3 mt-3" aria-hidden="true"></i>{work1}</h6>
                            
                                
                                <p className='mx-4'>
                                   {para1}
                                </p>
                                
                                <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-gift  me-3 mt-1" aria-hidden="true"></i> {work2}</h6>
                                <p className='mx-4'>
                                   {para2}
                                </p>
                                <div className="mybtn">
                                <button>View Details</button>

                                </div>
                                <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-map-marker  me-3 mt-1" aria-hidden="true"></i>{location}</h6>





                                <p className="card-text">{contant} <span style={{color: "blue"}}>see more</span> <i class="fa fa-bookmark-o mx-4" aria-hidden="true"></i></p>
                                
                               

                            </div>
                            
                        </div>
                        
                    </div>

                        </>
                    )
                })}
                  
                    
                </div>
               
            </div>


        </>
    )
}

export default Home
