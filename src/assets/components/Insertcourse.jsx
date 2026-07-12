import React, { useState } from 'react'
import Navigationbar from './Navigationbar'
import axios from 'axios'
const Insertcourse = () => {

    const[input,setinput]=useState({
    

    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
    })



     const inputhandler=(event)=>{
        
        
        setinput({...input,[event.target.name]:event.target.value})
     }


    const dataHandler=()=>{
        console.log(input)
        
        axios.post("http://192.168.33.245:5001/api/add-course",input).then(
            (res)=>{
                setinput(res.data)
                alert("data added")
            }
        ).catch(
            (error)=>{
                console.log(error);
                
            }
        )
    }

  return (
    <div>
        <Navigationbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">Add Course</h1>
                   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Course name :</label>
                        <input type="text"
                         className="form-control"
                         name='course_name'
                         value={input.course_name}
                         onChange={inputhandler}
                         />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">duration ::</label>
                        <input type="text"
                         className="form-control"
                         name='duration'
                         value={input.duration}
                         onChange={inputhandler}
                         />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">fee</label>
                        <input type="text"
                         className="form-control"
                         name='fee'
                         value={input.fee}
                         onChange={inputhandler}
                         />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">mode</label>
                        <input type="text" 
                        className="form-control" 
                        name='mode'
                        value={input.mode}
                        onChange={inputhandler}
                        
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">trainer:</label>
                        <input type="text" 
                        className="form-control"
                        name='trainer'
                        value={input.trainer}
                        onChange={inputhandler}
                        />
                    </div>
                   
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success" onClick={dataHandler}>submit :</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insertcourse