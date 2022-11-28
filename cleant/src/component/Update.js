import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router';
import { updateCont ,GetUniqueContact} from '../api/contact';


const Update = () => {

  const{id}=useParams()
  let navigate = useNavigate();
    console.log({id})
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')

  const getContactById= async(contactId)=>{
    const data =await GetUniqueContact(contactId)
    console.log(data)
    console.log(contactId)
    setName(data.getuser.name)
    setAge(data.getuser.age)
    setEmail(data.getuser.email)
  }
  useEffect(()=>{
   if (id) {getContactById(id)}
  },[id])



 const handelSubmit=async(contactId,newValue)=>{
  await updateCont(contactId,newValue)
  navigate('/contacts')
 }

  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your Name"  value={name} onChange={(e)=>setName(e.target.value)}/>

        <br/>
        <Form.Label>Email address</Form.Label>

        

        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
        <Form.Label>Age</Form.Label>
        <Form.Control  placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
     
     
      <Button  onClick={()=>handelSubmit(id,{name,age,email})}>
        Update
      </Button>
    </Form>
    </div>
  )
}

export default Update