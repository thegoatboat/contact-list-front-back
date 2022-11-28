import React, { useEffect } from 'react'
import { fetchContacts } from '../api/contact'
import { useDispatch,useSelector } from 'react-redux'
import { setContacts } from '../store/ContactSlice'
import CardContact from './CardContact'

const ListContact = () => {
  const dispatch=useDispatch();
  const contacts = useSelector(state=>state.contact)
  const getContact=async()=>{
    const data = await fetchContacts()
    dispatch(setContacts(data.contacts))
    console.log('data',data.contacts)
    console.log('contacts',contacts)
    console.log(getContact)
    }
    
 
    useEffect(()=>{
      getContact();
    },[])

  return (
    <div>
      {
        contacts.map((e)=>(  < CardContact key={e._id} contact ={e} getContact={getContact}/> ) )
        
      }
     {console.log(contacts)}
    </div>
  )
}

export default ListContact