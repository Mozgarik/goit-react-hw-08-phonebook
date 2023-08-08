import s from './Logo.module.css'

const Logo = () => {
    return (
        <div className={s.titleDiv}><h1 className={s.title}>Phoneb<span className={s.greyO}>o</span><span className={s.blueO}>o</span>k</h1></div>
    )
}

export default Logo