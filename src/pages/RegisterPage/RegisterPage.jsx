import SignUp from "components/SignUp/SignUp"
import Logo from "components/Logo/Logo"
import s from './RegisterPage.module.css'

const RegisterPage = () => {
    return(
        <div>
        <nav className={s.nav}>
            <Logo/>
            <h1 className={s.welcome}><span className={s.w}>W</span>elcome!🎉</h1>
        </nav>
            <SignUp/>
        </div>
    )
}

export default RegisterPage