import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from "./Componentes/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Componentes/Paginas/Home";
import Login from "./Componentes/Paginas/Login";
import Register from "./Componentes/Paginas/Register";
import Nosotros from "./Componentes/Paginas/Nosotros";
import Creacion from "./Componentes/Servicios/CreacionContrato";
import Firma from "./Componentes/Servicios/FirmaDigital";
import Gestion from "./Componentes/Servicios/Gestion";
import Ofertas from "./Componentes/Servicios/Oferta";
import Revision from "./Componentes/Servicios/Revision";
import Asistencia from "./Componentes/Servicios/Asistencia";
import { AuthProvider } from "./Componentes/Context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Paginas/Nosotros" element={<Nosotros />} />
          <Route path="/Paginas/Login" element={<Login />} />
          <Route path="/Paginas/Register" element={<Register />} />
          <Route path="/Servicios/Creacion" element={<Creacion />} />
          <Route path="/Servicios/Firma" element={<Firma />} />
          <Route path="/Servicios/Gestion" element={<Gestion />} />
          <Route path="/Servicios/Ofertas" element={<Ofertas />} />
          <Route path="/Servicios/Revision" element={<Revision />} />
          <Route path="/Servicios/Asistencia" element={<Asistencia />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
