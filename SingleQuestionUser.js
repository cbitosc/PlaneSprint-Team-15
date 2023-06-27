import React,{useEffect,useState} from 'react'
import '../CSS/Singlecourse.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import NavbarUser from './NavbarUser'
import Card from './Card'


function SingleQuestionUser() {
    const [data,setdata]=useState([])
    const {id}=useParams();
    const [uid,setuid] = useState('')

    const [selectedWeek, setSelectedWeek] = useState(null);

  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };

  const cardData = [
    {
      week: 1,
      title: 'Week 1',
      description: data.desc1,
    },
    {
      week: 2,
      title: 'Week 2',
      description: data.desc2,
    },
    {
      week: 3,
      title: 'Week 3',
      description: data.desc3,
    },
    {
      week: 4,
      title: 'Week 4',
      description: data.desc4,
    },
  ];

    useEffect(()=>{
        const fetchdata = async ()=>{
          axios.get(`http://localhost:8000/course/${id}`).then((res)=>{
            console.log(res.data)
            setdata(res.data.data)
            setuid(res.data.data._id)
            console.log(uid)
          }).catch((err)=>{
          console.log(err)
          })
        }
        fetchdata();
      },[])
  return (
    <div className="app">
      <NavbarUser/>
      <div className='cardcccc'>
       <div className='question-112'>
        <div style={{fontFamily:'"Lucida Console", "Courier New", monospace'}}>
        <p>{data.name}</p>
        </div>
        <p>{data.orgname}</p>
        </div>
      </div>
       <div className="week-selector">
         <h3>Course Material:</h3>
         <div>
         <ul>
           {cardData.map((card) => (
             <li
               key={card.week}
               className={selectedWeek === card.week ? 'active' : ''}
               onClick={() => handleWeekSelect(card.week)}
             >
               Week {card.week}
             </li>
           ))}
         </ul>
         </div>
       </div>

       {selectedWeek && (
         <div className="card-container" style={{marginLeft:"50%",marginBottom:"40%"}}>
           {cardData
             .filter((card) => card.week === selectedWeek)
             .map((card) => (
            <Card
                 key={card.week}
                 imageSrc={card.imageSrc}
                 title={card.title}
                 description={card.description}
               />
             ))}
         </div>
       )}
     </div>

  )
}

export default SingleQuestionUser