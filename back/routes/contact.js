const express=require('express')
const contactRouter=express.Router()
const {GetContact,AddContact,UpdateContact,DeletContact,GetById}=require('../controllers/contact')

contactRouter.get('/', GetContact)

contactRouter.post('/add',AddContact)
contactRouter.put('/:id',UpdateContact)

contactRouter.delete('/:id',DeletContact)

contactRouter.get('/:id', GetById)

module.exports=contactRouter