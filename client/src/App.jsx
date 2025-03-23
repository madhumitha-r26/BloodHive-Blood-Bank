import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
  )
}

export default App
