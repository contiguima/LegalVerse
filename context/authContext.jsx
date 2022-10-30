import { useContext , createContext} from "react";

export const authContext = createContext();

export const useAuth = () =>{
  const context = useContext(authContext)
  return context;
}
function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return <authContext.Provider value ={{ user }} > {children} </authContext.Provider>;
}
export default AuthProvider;

//