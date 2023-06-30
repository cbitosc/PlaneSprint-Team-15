import React from 'react'
import "../CSS/ImageGallery.css"
export default function ImageGallery() {
  return (
    <div className="image-gallery" style={{marginTop:"3%"}}>
      <div className="image-container">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/00b4aa50ad9e3233e50c4a39e3df94f0.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/00b4aa50ad9e3233e50c4a39e3df94f0.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=55 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/00b4aa50ad9e3233e50c4a39e3df94f0.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=55 3x" style="max-height:55px" alt="Learn anything" className="image1" style={{width:"100px"}} />
        <p className="image-name">Learn Anything</p>
        {"Explore any interest or trending topic, take prerequisites, and advance your skills"}
      </div>
      <div className="image-container">
      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/73feba6a844effd3a1116ba46b805171.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=47" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/73feba6a844effd3a1116ba46b805171.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=47 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/73feba6a844effd3a1116ba46b805171.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=47 3x" style="max-height:47px" alt="Save money" className="image2" style={{width:"120px",height:"100px"}}/>
        <p className="image-name" style={{marginleft:"-1%"}}>Save Money</p>
        {"Spend less money on your learning if you plan to take multiple courses this year"}
      </div>
      <div className="image-container" style={{marginTop:"0%"}} >
      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/54e0e0ac5da4f6184bda8d9a69ebf237.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/54e0e0ac5da4f6184bda8d9a69ebf237.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/54e0e0ac5da4f6184bda8d9a69ebf237.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=40 3x" style="max-height:40px" alt="Unlimited certificates" className="image3" style={{width:"100px"}}/>
        <p className="image-name">Unlimited Certifications</p>
        {"Earn a certificate for every learning program that you complete at no additional cost"}
      </div>
      <div className="image-container" style={{marginTop:"0%"}} >
      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/52653c8817c0031d547d6df9251e52ef.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=55" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/52653c8817c0031d547d6df9251e52ef.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=55 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/52653c8817c0031d547d6df9251e52ef.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=55 3x" style="max-height:55px" alt="Flexible learning" className="image4" style={{width:"100px"}}/>
            <p className="image-name">Unlimited Certifications</p>
            {"Learn at your own pace, move between multiple courses, or switch to a different course"}
      </div>
    </div>
    

  )
}