import Logo from "components/Logo/Logo";
import s from './Nav.module.css'
import { useDispatch } from "react-redux"
import { removeUser } from "Redux/userSlice"
import { useNavigate } from "react-router"
import { useAuth } from "hooks/use-auth"



const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()


 
    

    return (
        <div>
              <nav className={s.nav}>
                        <Logo/>
                            <button className={s.logOut} onClick={() => {
                                dispatch(removeUser());
                                if (isAuth) {
                                    navigate('/goit-react-hw-08-phonebook/')
                                }

                                }}>Log out from: <br /> <span className={s.email}>{email}</span>
                            </button>
                    </nav>
        </div>
    )
}

export default Nav