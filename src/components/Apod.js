import React, { useState, useEffect} from "react";
import axios from "axios";

function Apod() {
  const [pic, setPic] = useState([]);
     
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=KmrVhRcmF8faKX9gaPlOHq9PGxATwgJQrdZCFZ6D")
      .then(response => {
        setPic(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log("SIKE", error);
      });
  }, []);
  
    return (
        <div className='pics'>
          
              <h2>Date: {pic.date} </h2> 
              <h3>Title: {pic.title} </h3> 
              <img className="space_pic" alt="random space pic" src={pic.url}></img> 
              <p>{pic.explanation}</p> 
        
        </div>

    );
}

export default Apod;