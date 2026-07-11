import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Insertcourse from './assets/components/Insertcourse'
import Viewcourse from './assets/components/Viewcourse'
import{BrowserRouter,Routes,Route}from'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Insertcourse/>}/>
     
          <Route path="/Viewall" element={<Viewcourse />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
