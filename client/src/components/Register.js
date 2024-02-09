import {useState} from 'react';
import './Register.css'

function Register(){
  const [val,setval] = useState('last');
  const [secval,setsecval]=useState('last');
  console.log("hi komera");

  function handle(event){
    setval("first");
    console.log("here");
    console.log(event.target.name);
  }

  return(
  <>
    <h1>register form </h1>
    <form className='reg-form' onSubmit={handle}>

    <label>Name{val}</label>
    <input name="firnam" type='text'/>

    <label>Email</label>
    <input type='email'/>

    <button type='submit'>submit</button>

    </form>
  </> 
    )
}

export default Register;
 