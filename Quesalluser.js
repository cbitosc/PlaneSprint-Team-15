import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/style.css'
import axios from 'axios'
function Quesalluser() {

  const [data,setdata] = useState('')
  
  useEffect(()=>{
    axios.get('http://localhost:8000/allcourses').then((res)=>{
      console.log(res.data)
      setdata(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
        {/* <div class="card" style={{width:"700px"}}>
            <div class="card-body">
              <div style={{textAlign:'center'}}>
                <h5 class="card-title">Question</h5>
              </div>
                <p class="card-text">An interview is a structured conversation where one participant asks questions, and the other provides answers.The interviewer asks questions to which the interviewee responds, usually providing information. </p>
                <div className="d-grid gap-2 col-3 mx-auto">
                <a href="#" class="btn btn-primary "><Link  to="/home" className="custom-link">Practice</Link></a>
                </div>
            </div>
            </div> */}
          <div className='flex-123'>
            {
              data.length>0?
              data.map((item,index)=>{
                return (
                  <div className='card-card-123'>
                    <div className='question-q'>{item?.name}</div>
                    <div className='question-q'>{item?.orgname}</div>
                    <div className='question-q'>{item?.price}</div>
                    <div className='questiondesc-q'>{item?.desc1}</div>
                    <button type="button" class="btn btn-light" ><Link to={`/singlequser/${item._id}`}>Check out</Link></button>
                  </div>
                )
              }):"no data found"
            }
          </div>
    </div>
  )
}

export default Quesalluser