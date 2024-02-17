import { useState } from 'react';
import {Form,Input,Button} from 'antd';
import axios from 'axios'
import './Register.css'

function Register() {
  const [val, setVal] = useState('');

  // async function handle(values) {
  //   await axios.post('http://localhost:8080/login',values)
    
  //   setVal(JSON.stringify(values))
  // }
 
    async function handle(values) { 
      try {
        await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
    
    
      } catch (error) {
        console.error('Error occurred while sending data:', error);
        // Handle error gracefully (e.g., display an error message to the user)
      }
    }
     
 
  

  return (
    <>
  <div className="reg-form">
    <Form onFinish={handle} >
      <Form.Item label='Name' name='name'>
        <Input type='text' />
      </Form.Item>
      <br/>
    <Form.Item label='Email' name='email'>
    <Input type='email'/>
      
    
    </Form.Item>
    
    <Form.Item label="Password" name="password">
    
    <Input type="Password"/>
    </Form.Item>

    <Form.Item label='Re-enter Password' name="repassword">
      <Input type="password"/>
    </Form.Item>


    <Form.Item >
      <Button htmlType='submit'>submit</Button>
    </Form.Item>

    </Form>
    
    </div>
{/*     
      <form className='reg-form' onSubmit={handle}>
        <label>name </label>
        <input name='name' type='text' /><br />
        <input name='age' type='number' />
        <button type="submit">submit</button>
      </form> */}

     
    </>
  );
}

export default Register;

