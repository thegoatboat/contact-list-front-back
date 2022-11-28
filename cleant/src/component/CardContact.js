import React from 'react'
import Card from 'react-bootstrap/Card';
import { deletContact } from '../api/contact';
import { useNavigate } from 'react-router';

const CardContact = ({contact , getContact}) => {
  console.log('contact',contact)
  let navigate = useNavigate()

  const navigatUser=()=>{
    navigate(`/update/${contact._id}`)
  }
  return (
    <div>
      
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <button onClick={async()=>{ await deletContact(contact._id); getContact()}}>X</button>
        <button onClick={()=>navigatUser()}>Update</button>
        <Card.Title>{contact.name}</Card.Title>
        
        <Card.Title >{contact.email}</Card.Title>
        <Card.Title >{contact.age}</Card.Title>
        
      </Card.Body>
    </Card>
       
    </div>
  )
}

export default CardContact