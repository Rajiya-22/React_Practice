import React from 'react'

const Login = (props) => {
  let status;
  if(props.login){
    status = "Log In";
  }
  else{
    status = "Log Out";
  }
  return (
    <div>
      <h1>Status:{status}</h1>To {props.login? 'Logout' : 'Login'}:
      <button onClick={()=>{props.setLogin(!props.login)}}>CLICK HERE!</button>
    </div>
  )
}

export default Login
