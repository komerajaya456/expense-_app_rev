import {useState} from 'react';
import {Form,Input,Button} from 'antd';
import './Register.css'

function Register(){
  const [val,setval] = useState("kom");
  
  

  function handle(values){
      setval(values.)
    
  }

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
}

export default Register;