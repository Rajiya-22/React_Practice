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
    </div>
  )
}

export default Card
