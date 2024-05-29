import styles from './SocialButton.module.css'

export default ({logo, execute, name}) =>{
    return(
        <>
            <button className={styles.socialButton} onClick={execute}>
                <img src={logo} alt={name} />
            </button>
        </>
    )
}