import { useState } from "react";
import { useAuth } from "../../Context/authContext";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" placeholder="nombre" onChange={handleChange} />

        <label htmlFor="apellido">Apellido</label>
        <input type="text" placeholder="apellido" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="tuEmail@company.com" />

        <label htmlFor="fechaNacimiento">fecha de nacimiento</label>
        <input type="date" name="fechaNacimiento" placeholder="dd/mm/aaaa" />

        <label htmlFor="text">Tipo</label>
        <input type="text" placeholder="fisica o juridica" />

        <label htmlFor="password">Constraseña</label>
        <input type="password" placeholder="password" />

        <label htmlFor="password">Confirmar constraseña</label>
        <input type="password" placeholder="password" />

        <button>
          Register
        </button>
      </form>
    </div>
  );
}
