import Login from "components/Login/Login"
import { Link } from "react-router-dom"
import Logo from "components/Logo/Logo"
import s from "./LoginPage.module.css"

const LoginPage = () => {
    return(
        <div>
                    <nav className={s.nav}>
                        <Logo/>
                        <h1 className={s.welcome}><span className={s.w}>W</span>elcome!🎉</h1>
                    </nav>
            <Login/>
        </div>
    )
}

export default LoginPage