import React from 'react'
import "./UserCard.css"
import Hijabi from '../assets/Hijabi.jpg'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id="userTitle">{props.name}</p>
        <img src={Hijabi} alt="ok" id="userImg"/>
        <p id="userDesc">Description of {props.name}</p>
    </div>
  )
}

export default UserCard
