import { useAuth } from "hooks/use-auth"
import { Home } from "components/Home/Home"
import { useEffect } from "react"
import Nav from "components/Navigation/Nav"
import { useNavigate } from "react-router"



const HomePage = () => {
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    const local = localStorage.getItem('user')
  
   useEffect(() => {
    if (!isAuth) {
        navigate('/login')
    } 
   })

   

   
    return (    
                <div>
                    <Nav/>
                   <Home/>
                </div>   
    )   
}

export default HomePage