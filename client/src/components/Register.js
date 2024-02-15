import { useState } from 'react';
import {Form,Input,Button} from 'antd';
import axios from 'axios'

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

    <Form onFinish={handle}>
      <Form.Item label='firstname' name='kvr'>
        <Input type='text' />
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
}

export default Register;

