
import './App.css';
import ListContact from './component/ListContact';
import Update from './component/Update';
import Home from './component/Home';
import Add from './component/Add';
import Navcontact from './component/Navcontact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navcontact/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contacts' element={<ListContact/>} />
    <Route path='/addContact' element={<Add/>} />
    <Route path='/update/:id' element={<Update/>} />
    </Routes>
    
    
    </>
  );
}

export default App;
