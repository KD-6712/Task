import React from 'react'

// import { fetchUsername } from '../form/formAction'
import {fetchEmail, fetchPassword, fetchUsername} from '../redux'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
function Formvalidation() {
  const dispatch_Username = useDispatch((username) => dispatch_Username(fetchUsername(username)))
  const dispatch_Email = useDispatch((email) => dispatch_Email(fetchEmail(email)))
  const dispatch_Password = useDispatch((password) => dispatch_Password(fetchPassword(password)))

  const [uname, setUname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function Validate(em, pw){
  const flag1 = String(em)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  var passw=  /^[A-Za-z]\w{7,14}$/

  const flag2 = String(pw).match(passw);
  const flag = flag1 && flag2
  return flag
   }



  return (
    <div>
      <h1> Form </h1>
      <label for="uname">UserName:</label><br/>
      <input type='text' id="uname" value={uname} onChange={(event) => setUname(event.target.value)} /><br/>

      <label for="email">Email:</label><br/>
      <input type='text' id="email" value={email} onChange={(event) =>{ 
        setEmail(event.target.value);
        }} /><br/>

      <label for="password">Password:</label><br />
      <input type="password" id="password" value={password} name="password" onChange={(event) => setPassword(event.target.value)}/><br /> 

       
      <button disabled={!(uname && email && password)} onClick={() => {
        if(!Validate(email, password)){
          alert("Enter Proper credentials")
        }
        else {dispatch_Username(fetchUsername(uname)); dispatch_Email(fetchEmail(email)); dispatch_Password(fetchPassword(password))}}}   >
        Submit
      </button>
    </div>
  )
}


export default Formvalidation
