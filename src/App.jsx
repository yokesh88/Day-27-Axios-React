import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Components/Home'
import Users from './Components/Users'
import Edit from './Components/Edit'
import Adduser from './Components/AddUser'
import Nanbar from './Components/Navbar'
const App = () => {

 
 
  const [id, setId] = useState(0);
    

  return (
    
    <>
      <BrowserRouter>
        
          <Nanbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users setId={setId}/> }/>
          <Route path="/edit/:id" element={<Edit id={id}/>}/>
          <Route path="/adduser" element={<Adduser />}/>
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App