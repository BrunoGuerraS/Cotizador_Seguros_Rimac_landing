import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SalesPage from './pages/SalesPage/SalesPage'

function App() {
  

  return (
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='sales' element={<SalesPage/>} />
    </Routes>

  )
}

export default App
