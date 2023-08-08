import Form from "../Form/Form";
import { useDispatch } from "react-redux"
import { setUser } from "Redux/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import s from './Login.module.css'
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

    const handleLogin = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user.user)
            dispatch(setUser({
                email: user.user.email,
                id: user.user.uid,
                token: user.user.stsTokenManager.accessToken,
            }))
            navigate('/goit-react-hw-08-phonebook/')
        })
        .catch(() => alert('Invlalid user!'))

   }

    return(
        <div className={s.loginForm}>
            <h2 className={s.login}>Login<span className={s.l}></span></h2>
            <Form title="Login"
                  handleClick={handleLogin}/>
                  <p className={s.forwarding}>If you are not registered yet:<Link className={s.link} to={'/register'}>Sign Up</Link></p>
        </div>
    )
}

export default Login