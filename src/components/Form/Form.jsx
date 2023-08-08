import { useState } from "react";
import s from './Form.module.css'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={s.form}>
            <input className={s.fInput} placeholder="Email" type="email"
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
            />

            <input className={s.sInput} placeholder="Password" type="pass"
                   value={password}  
                   onChange={(e) => setPassword(e.target.value)}
            />

        <button className={s.button} onClick={() => handleClick(email, password)}>
            {title}
        </button>

        </div>

    )
}

export default Form