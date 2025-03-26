import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </>
  )
}

export default App
