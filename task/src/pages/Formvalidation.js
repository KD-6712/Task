import React from 'react'
import { fetchCountry, fetchDescription, fetchEmail, fetchMobileno, fetchPassword, fetchPincode, fetchUsername } from '../redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

//import background from '../components/Navbar/formBackground.jpg'

// Formvalidation function return the view of form page with validation.
function FormValidation() {
 
// Declaration of all the dispatch methods to retrieve data from redux store  
  const dispatch_Username = useDispatch((username) => dispatch_Username(fetchUsername(username)))
  const dispatch_Email = useDispatch((email) => dispatch_Email(fetchEmail(email)))
  const dispatch_Password = useDispatch((password) => dispatch_Password(fetchPassword(password)))
  const dispatch_Mobileno = useDispatch((mobileno) => dispatch_Mobileno(fetchMobileno(mobileno)))
  const dispatch_Country = useDispatch((country) => dispatch_Country(fetchCountry(country)))
  const dispatch_Pincode = useDispatch((pincode) => dispatch_Pincode(fetchPincode(pincode)))
  const dispatch_Description = useDispatch((description) => dispatch_Description(fetchDescription(description)))

// Initialising all the state variables that will be required.
  const [uname, setUname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobileno, setMobileno] = useState("")
  const [country, setCountry] = useState("")
  const [pincode, setPincode] = useState("")
  const [description, setDescription] = useState("")

// p1, p2, p3, p4 are the state variables which will take care of the validity of inputfields.
  const [p1, setP1] = useState(false) 
  const [p2, setP2] = useState(false)
  const [p3, setP3] = useState(false)
  const [p4, setP4] = useState(false)

  function verifyUname() {
    var un = document.getElementById("username").value;
    if (un.length < 4) {
      document.getElementById("message").innerHTML = "*Greater than 4 characters";
      if(p1 === true){
        setP1(!p1)
      }
    } else {
      document.getElementById("message").innerHTML = "";
      if(p1 === false){
        setP1(!p1)
      }
    }
  }

  function verifyEmail() {
    var em = document.getElementById("emailid").value;
    const flag1 = String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!flag1) {
      document.getElementById("message1").innerHTML = "*Enter proper email-id";
      if(p2 === true){
        setP2(!p2)
      }
    } else {
      document.getElementById("message1").innerHTML = "";
      if(p2 === false){
        setP2(!p2)
      }
    }
  }

  function verifyPassword() {
    var pw = document.getElementById("password").value;
    var passw = /^[A-Za-z]\w{7,14}$/
    const flag2 = String(pw).match(passw);
    if (!flag2) {
      document.getElementById("message3").innerHTML = "*Enter proper password";
      if(p3 === true){
        setP3(!p3)
      }
    } else {
      document.getElementById("message3").innerHTML = "";
      if(p3 === false){
        setP3(!p3)
      }
    }
  }

  function verifyMob() {
    var mob = document.getElementById("mobileno").value;
    if (mob.length !== 10) {
      document.getElementById("message4").innerHTML = "*It should be 10 digits";
      if(p4 === true){
        setP4(!p4)
      }
    } else {
      document.getElementById("message4").innerHTML = "";
      if(p4 === false){
        setP4(!p4)
      }
    }
  }

  // Whenever click is triggered it will call the dispatcher.
  const handleClick = () => {
    dispatcher()
  }

  // Dispatch the data to the store.
  const dispatcher = () => {    
      dispatch_Username(fetchUsername(uname));
      dispatch_Email(fetchEmail(email));
      dispatch_Password(fetchPassword(password));
      dispatch_Mobileno(fetchMobileno(mobileno));
      dispatch_Country(fetchCountry(country));
      dispatch_Pincode(fetchPincode(pincode));
      dispatch_Description(fetchDescription(description))
  }

  return (
    // <div style={{
    //   backgroundImage: `url(${background})`,
    // }}>
      <div>
      <h1> Form </h1><br />
      <form className="row g-3 needs-validation align-items-center" style={{ justify: "center" }} novalidate>
        <div className="col-md-3 container mx-4">
          <label for="validationCustom01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationCustom01" value="Kartik" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-3 container mx-4">
          <label for="validationCustom02" className="form-label">Last name</label>
          <input type="text" className="form-control" id="validationCustom02" value="Disawal" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-3 container mx-4">
          <label for="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="username" aria-describedby="inputGroupPrepend" value={uname} onChange={(event) => setUname(event.target.value)} onBlur={(event) => { verifyUname(event.target.value) }} required />
            <span id="message" style={{ color: "red" }}> </span>
          </div>
        </div>

        <div className="col-md-6 mx-4" >
          <label for="emailid" className="form-label">Email-Id</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control col-1" id="emailid" aria-describedby="inputGroupPrepend" value={email} onChange={(event) => { setEmail(event.target.value) }} onBlur={(event) => { verifyEmail(event.target.value) }} required />
            <span id="message1" style={{ color: "red" }}> </span>
          </div>
        </div>


        <div className="col-md-3 mx-4">
          <label for="mobileno" className="form-label">MobileNo:</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control" id="mobileno" aria-describedby="inputGroupPrepend" value={mobileno} onChange={(event) => setMobileno(event.target.value)} onBlur={(event) => { verifyMob(event.target.value) }} required />
            <span id="message4" style={{ color: "red" }}> </span>
          </div>
        </div>
        <br />

        <div className="col-md-4 mx-4">
          <label for="validationCustom03" className="form-label">Country</label>
          <input type="text" className="form-control" id="validationCustom03" value={country} onChange={(event) => setCountry(event.target.value)} required />
          <div className="invalid-feedback">
            Please provide a valid country.
          </div>
        </div>

        <div className="col-md-4 container mx-4">
          <label for="validationCustom03" className="form-label">Pincode</label>
          <input type="text" className="form-control" id="validationCustom03" value={pincode} onChange={(event) => setPincode(event.target.value)} required />
          <div className="invalid-feedback">
            Please provide a valid Pincode.
          </div>
        </div>

        <div className="mb-3 mx-4">
          <label for="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        </div>

        <div className="col-md-4 my-2 mx-4">
          <label for="password" className="form-label">Password</label>
          <input type="text" className="form-control" id="password" value={password} onChange={(event) => setPassword(event.target.value)} onBlur={(event) => { verifyPassword(event.target.value) }} required />
          <span id="message3" style={{ color: "red" }}> </span>
        </div>
      </form>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                Username: {uname}
              </div>
              <div>
                Mobileno: {mobileno}
              </div>
              <div>
                Email-Id: {email}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid col-2 gap-2 mx-auto">
        <button type="button" disabled={!p1 || !p2 || !p3 || !p4} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}>Submit</button>
      </div>
    </div>
  )
}

export default React.memo(FormValidation)
