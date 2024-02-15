<<<<<<< HEAD
import {useState} from 'react';
import {Form,Input,Button} from 'antd';
import './Register.css'

function Register(){
  const [val,setval] = useState("kom");
  
  

  function handle(values){
      setval(values.)
=======
import { useState } from 'react';
import {Form,Input,Button} from 'antd';
import axios from 'axios'

function Register() {
  const [val, setVal] = useState('');

  function handle(values) {
>>>>>>> 258cc3cbdde73d2499d101e99e0cde96828430be
    
    setVal(JSON.stringify(values))
  }

<<<<<<< HEAD
  return(
  <>
 
  <h1>heading</h1>
  
  <Form onSubmit={handle}>
  <Form.Item label="firstname">
  <Input name='kvr' type='pa'/>
  </Form.Item>
  
  <Form.Item>
  <Button>submit</Button>
  </Form.Item>
  
  </Form>
  
  

  
  
  
  
  
  
   
     
    <h1>register form {val}</h1>
    <br />
    <h1>2nd form {val}</h1>
  </> 
    )
=======
  return (
    <>

    <Form onFinish={handle}>
      <Form.Item label='firstname' name='kvr'>
        <Input type='password' />
      </Form.Item>

    <Form.Item >
      <Button htmlType='submit'>submit</Button>
    </Form.Item>

    </Form>
{/*     
      <form className='reg-form' onSubmit={handle}>
        <label>name </label>
        <input name='name' type='text' /><br />
        <input name='age' type='number' />
        <button type="submit">submit</button>
      </form> */}

      <h1>register form {val}</h1>
      <br />
      <h1>2nd form {val}</h1>
    </>
  );
>>>>>>> 258cc3cbdde73d2499d101e99e0cde96828430be
}

export default Register;

