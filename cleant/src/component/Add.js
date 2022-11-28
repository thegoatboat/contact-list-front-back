import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postContact } from '../api/contact';
import {useNavigate} from  'react-router'

const Add = () => {

  const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    let navigate=useNavigate()
    const handelSubmit=async(values)=>{
        await postContact(values)
        navigate('/contacts')
       
    }

  return (
    <div>
      <Form>
      <Form.Label>Name</Form.Label>
      <Form.Control  placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/>

        <br/>
        <Form.Label>Email address</Form.Label>

        

        <Form.Control  placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <br/>
     
        <Form.Label>Age</Form.Label>
        <Form.Control placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
  
     
      <Button onClick={()=>handelSubmit({name,age,email})} >
        Submit
      </Button>
    </Form>
    
    </div>

  )
}

export default Add