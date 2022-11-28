import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const ContactSlice = createSlice({
    name:"contact",
    initialState:[{
        id:uuidv4(),
        name:'salah',
        age:0,
        email:'abedesmad@gml.cm'
    }],
    reducers:{
        addContact:(state,action)=>{
            const newContact={
                id:uuidv4(),
                ...action.payload
            
            }
            return [...state,newContact]
        },
        setContacts:(state,action)=>{
            return action.payload;
        }
    }
}) 

export const {addContact,setContacts}=ContactSlice.actions

export default ContactSlice.reducer