import React from 'react';
import '../CSS/Part.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImag from"../images/mainimag.jpg";
export default function Part() {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="heading">Flexible.Fair.<br/>Finally,Technology works how you want it to</h1>
        <div className="info">
          <p style={{textAlign:"justify"}}>This website provide an effective way of teaching and learning online. They are accessible,
           interactive, and cost-efficient, which makes them a great alternative to traditional education. Additionally,This website
           can help to bridge the digital divide by making education accessible to those who may not have access to traditional educational resources.</p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="right-section">
        <img src={MyImag} alt="Image" className="image" style={{height:"450px",width:"500px",margintop:"5%"}}/>
      </div>
    </div>
  )
}