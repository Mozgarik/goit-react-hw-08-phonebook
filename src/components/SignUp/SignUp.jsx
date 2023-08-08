import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import { setUser } from "Redux/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import s from './SignUp.module.css'


const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accesToken,
            }))
            navigate('/Phonebook')
        })
        .catch(console.error)

   }

   return(
    <div className={s.loginForm}>
        <h2 className={s.login}>Registration<span className={s.l}></span></h2>
        <Form title="Registration"
              handleClick={handleRegister}/>
              <p className={s.forwarding}>If you are have an accaunt:<Link className={s.link} to={'/login'}>Login</Link></p>
    </div>
)
    }

export default SignUp