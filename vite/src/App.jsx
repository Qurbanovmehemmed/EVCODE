
import './App.css'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'


function App() {

  return (
   <>
   <Navbar/>
    <Routes>
     
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={} /> */}
    </Routes>
   </>
  )
}

export default App
