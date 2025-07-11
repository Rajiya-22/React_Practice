import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handleOnClick}>
            CLICK ME!!
      </button>
      <h4>Count is {props.count}</h4>
      Enter the name:<input type='text' onChange={(e)=>{props.setName(e.target.value)}}/>
      <p>Name is: {props.name}</p>    
    </div>
  )
}

export default Card
