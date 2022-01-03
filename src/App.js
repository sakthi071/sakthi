
import './App.css';
import {useState}from 'react'

function App() {
const[Fname ,setFname] = useState("")
const[Lname ,setLname] = useState("")
const[Uname ,setUname] = useState("")
const[Pnum ,setPnum] = useState("")
const[Email ,setEmail] = useState("")
const[Home ,setHome] = useState("")
const[Offfice ,setOffice] = useState("")
const[Password ,setPassword] = useState("")
const[Cpassword ,setCpassword] = useState("")
const [country , setcountry] = useState("")
let sakthi = ["country","India","america","China","Japan"]
const[gender ,setGender] = useState({})
return (
    <div className ="sakthi">

        <center><h1> Register</h1></center>
       
        
        
        <div className="one"><input  onChange = {(inputProperties)=>{setFname(inputProperties.target.value)}} type="text" placeholder="First Name"/><input onChange = {(inputProperties)=>{setLname(inputProperties.target.value)}} type="text" placeholder="Last Name"/>
        </div><div className="ss">{Fname.length ===0 ?<span>"please enter the first name"</span>:""}<span>{Lname.length ===0 ?"please enter the last name":""}</span></div><br></br>
        <div className="two"><input onChange = {(inputProperties)=>{setUname(inputProperties.target.value)}} type="text" placeholder="Username"/> <input onChange = {(inputProperties)=>{setPnum(inputProperties.target.value)}} type="number" placeholder="PhoneNo"/>
        </div><div className='s1'><span>{Uname.length ===0 ?"please enter the username":""}</span><span>{Pnum.length ===0 ?"please enter the phone number":""}</span></div><br></br>
        <div className="three"><input onChange = {(inputProperties)=>{setEmail(inputProperties.target.value)}}  type="email" placeholder="Your E-Mail Address"/>
        </div><div className='s2'><span>{Email.length ===0 ?"please enter the valid email":!(Email.includes("@") && Email.includes(".com")) ?"please enter the correct email id ":""}</span></div><br></br>
        <input id="g" type="date" placeholder="Date of Birth DD/MM/YY"/>
        <input onChange={(tochange)=>{setGender({male : tochange.target.checked})}} id="sm" type="radio" name="gender"/><span>male</span><br></br>
        <input  onChange={(tochange)=>{setGender({female : tochange.target.checked})}} id="smv" type="radio" name="gender"/><span>female</span>
        {console.log(gender)}
    <br></br>    
        <div className="five"><select onChange={(sak)=>{setcountry(sakthi[sak.target.options.selectedIndex])}}>
            <option>country</option>
            <option>India</option>
            <option>america</option>
            <option>China</option>
            <option>Japan</option>
            
        </select>
        <select name="state" id="tamil" type="text" >
            <option>State</option>
        </select>
    </div><br></br>
    <div className="ss"><span>{country=="country"?"please enter country":""}</span></div>
        <div className="six"><input  onChange = {(inputProperties)=>{setHome(inputProperties.target.value)}} type="text" placeholder="home Address"/><input  onChange = {(inputProperties)=>{setOffice(inputProperties.target.value)}}  type="text" placeholder="Office Address"/>
        </div><div className='s3'><span>{Home.length ===0 ?"please enter the home address":""}</span><span>{Offfice.length ===0 ?"please enter the office address":""}</span></div><br></br>
        <div className="sevan"><i><input  onChange = {(inputProperties)=>{setPassword(inputProperties.target.value)}} type="password" placeholder="Password"/></i><input onChange = {(inputProperties)=>{setCpassword(inputProperties.target.value)}} type="password" placeholder="Confirm Password"/>
        </div><div className='s4'><span>{Password.length !== 8 ?"please enter the paassword":""}</span><span>{Cpassword.length !== 8 ?"please enter the confirm password":""}</span></div><br></br>
        
        
         <button onclick="sakVel()">Sumbit</button>
         

         
    </div>
  );
}

export default App;
