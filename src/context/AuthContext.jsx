import { useEffect, useState,createContext } from "react"

const AuthContext = createContext;
export const AuthContextProvider = ({children}) =>{
    
    const [auth,setAuth] = useState({
        user:null,
        token:null,
    });

    useEffect(()=>{
        const user = localStorage.getItem('user');
        const token =localStorage.getItem('token');
        if(user && token){
          setAuth({
              user:JSON.parse('user'),
              token:token,
            })
        } else {
              setAuth({
                  user:null,
                  token:null,
                })
            }
        },[]);

       return (
            <AuthContext.Provider value={{ auth, setAuth, logout }}>
                {children}
            </AuthContext.Provider>
        );
};
    
export default AuthContext;





// Apply useEffect on username and token 