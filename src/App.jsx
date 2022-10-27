import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
import Footer from './Componentes/Footer/Footer'
import { Routes, Route, Link  } from 'react-router-dom'
import Home from './Componentes/Paginas/Home'
import Login from './Componentes/Paginas/Login'
import CreateAccount from './Componentes/Paginas/Create'
import Nosotros from './Componentes/Paginas/Nosotros'

function App() {
   return (
    <div className="App">
      <Navbar/>
        <Routes>
         <Route path="/" element={ <Home />}/>
         <Route path="/Paginas/Login" element={<Login/>}/>
         <Route path="/Paginas/Create" element={<CreateAccount/>}/>
         <Route path="/Nosotros" element={<Nosotros/>}/>
        </Routes>
        <Footer/>
    </div>    
  )
}

export default App