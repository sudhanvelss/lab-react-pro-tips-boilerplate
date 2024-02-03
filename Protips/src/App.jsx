import './App.css'
import Navbar from './components/nav'
import AllRoutes from './components/AllRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
    </>
  )
}

export default App