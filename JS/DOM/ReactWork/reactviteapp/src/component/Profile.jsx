import React from 'react'
import './profile.css'
function Profile({data}) {
  return (
    <div className='parent'>  
        <h2>Profile page</h2>
        <img src={data.pic} height={200} width={200}></img>
        <p>Name:{data.myname}</p>
        <p>Branch:{data.branch}</p>
        <p>Section:{data.section}</p>
        <p>College:{data.college}</p>
    </div>
  )
}

export default Profile