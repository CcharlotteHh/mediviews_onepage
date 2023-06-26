import React from 'react';
import { useEffect, useState } from 'react';

function Blog() {
  const [blog , setBlog] = useState([]);
  useEffect(()=>{
    
    fetch('http://localhost:3000/Data.json')
    .then(res => res.json())
    .then(data =>{
      setBlog(data)
    })
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Blog
