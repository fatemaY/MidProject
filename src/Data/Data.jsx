import axios from "../Data/axios"
import React from 'react'
import { useEffect, useState } from 'react'


const UserData = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async()=>{
    try {
      const response = await axios.get('/studenForm')

    setTimeout(()=>{
      setData(response.data);
    },2000)
    } catch (error) {
      console.log(error.message)
    }
  }
  // console.log(data); 

  return (
  <div>
    {data}
  </div>
  );
  
}

export default UserData