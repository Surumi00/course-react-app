import React from 'react'
import axios from 'axios'
import{useEffect,useState} from 'react'
import Navigationbar from './Navigationbar'

const Viewcourse = () => {
     const [data,setdata]=useState([])

        const fetchData=()=>{


          axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (res)=>{
              setdata(res.data)
            }
          ).catch()

        }

        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>
        <Navigationbar/>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All course</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course name:</th>
              <th>Created at</th>
              <th>duration</th>
              <th>fee</th>
              <th>id</th>
              <th>mode</th>
              <th>trainer</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.course_name}</td>
                        <td>{value.created_at}</td>
                        <td>{value.duration}</td>
                        <td>{value.fee}</td>
                        <td>{value.id}</td>
                        <td>{value.mode}</td>
                        <td>{value.trainer}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

    </div>
  )
}

export default Viewcourse