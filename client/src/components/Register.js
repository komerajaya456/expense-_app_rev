import {useState} from 'react';
import './Register.css'

function Register(){
  const [val,setval] = useState({firstname:"",
      age:0,
  });
  
  

  function handle(e){
    e.preventDefault();//this event to prevent 
    setval.firstname(e.target.name.value);
    setval.age(e.target.age.value)
    
    
  }

  return(
  <>
   <form className='reg-form' onSubmit={handle}>
      <label>name </label>
      <input name='name' type='text'/><br />
      <input name='age' type='number'/>
     <button>submit</button>

   </form>
   
     
    <h1>register form {val.firstname}</h1>
    <br />
    <h1>2nd form {val.age}</h1>
  </> 
    )
}

export default Register;