import React,{useState} from 'react'
import axios from 'axios'
import NavbarAdmin from './NavbarAdmin';
function Createcourse() {
    const [name, setname] = useState('');
    const [desc1, setdesc1] = useState('');
    const [desc2, setdesc2] = useState('');
    const [desc3, setdesc3] = useState('');
    const [desc4, setdesc4] = useState('');
    const [orgname, setorgname] = useState('');
    const [price, setprice] = useState('');

  const handlenameChange = (e) => {
    setname(e.target.value);
  };
  const handledesc1Change = (e) => {
    setdesc1(e.target.value);
  };
  const handledesc2Change = (e) => {
    setdesc2(e.target.value);
  };
  const handledesc3Change = (e) => {
    setdesc3(e.target.value);
  };
  const handledesc4Change = (e) => {
    setdesc4(e.target.value);
  };
  const handleorgnameChange = (e) => {
    setorgname(e.target.value);
  };
  const handlepriceChange = (e) => {
    setprice(e.target.value);
  };
  const handleClick =()=>{
    // console.log(question,questiondesc)
    // const formData = new FormData()
    // formData.append('question',question)
    // formData.append('questiondesc',questiondesc)
    // console.log(formData)
    axios.post('http://localhost:8000/addcourse',{name:name,orgname,desc1,desc2,desc3,desc4,price}).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)})

  }
  return (<div>
    <NavbarAdmin/>
                {/* <div style={{ width: '90%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '70%',textAlign: 'right',marginTop:'10 px'}}> */}
            <div>
                <input type="text" value={name} onChange={handlenameChange} style={{width: '80%',height: '150px',}} placeholder='Type your course name here'/>
                <input type="text" value={orgname} onChange={handleorgnameChange} style={{width: '80%',height: '150px',}} placeholder='Type your organisation name here'/>
                <input type="text" value={desc1} onChange={handledesc1Change} style={{width: '80%',height: '150px',}} placeholder='Description about the course week 1'/>
                <input type="text" value={desc2} onChange={handledesc2Change} style={{width: '80%',height: '150px',}} placeholder='Description about the course week 2'/>
                <input type="text" value={desc3} onChange={handledesc3Change} style={{width: '80%',height: '150px',}} placeholder='Description about the course week 3'/>
                <input type="text" value={desc4} onChange={handledesc4Change} style={{width: '80%',height: '150px',}} placeholder='Description about the course week 4'/>
                <input type="text" value={price} onChange={handlepriceChange} style={{width: '80%',height: '150px',}} placeholder='Price of the course'/>
                
            </div>
            <br/>
            <button type="button" class="btn btn-outline-dark" onClick={handleClick}>ADD</button>

            {/* </div>
            </div> */}
  </div>
  )
}

export default Createcourse