import App from '../../App';
import styles from './Login.module.css';

import SocialButton from './components/ui/socialButton/SocialButton';

import AppleLogo from '/static/apple.png';
import GoogleLogo from '/static/google.png';

export default () =>{
    return (
        <>
            <div className={styles.Container}>
                <header>
                    <div className='logo'>
                        <h1>Planner</h1>
                        <h2>Trabalhos</h2>
                    </div>
                </header>
                <main className={styles.Content}>
                    <form className={styles.loginBox}>
                            <label className={styles.formLabel} htmlFor="user">Usuario</label>
                        <div className={styles.formInputContainer}>
                            <input className={styles.formInput} placeholder='Digite seu usuario' type="text" maxLength={50} required />
                        </div>
                            <label className={styles.formLabel} htmlFor="pass">Senha</label>
                        <div className={styles.formInputContainer}>
                            <input maxLength={30} required placeholder='Digite sua senha' className={styles.formInput} type="password" name="pass" id="pass" />
                        </div>
                        <div className={styles.socialLogin}>
                            <SocialButton logo={AppleLogo}/>
                            <SocialButton logo={GoogleLogo}/>
                        </div>
                        <div className={styles.formButtonContainer}>
                            <input className={styles.formButton} type="submit" value="Login" />
                        </div>
                        <div className={styles.loginFooter}>
                            <p>Esqueci minha senha</p>
                            <p>Cadastro</p>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}