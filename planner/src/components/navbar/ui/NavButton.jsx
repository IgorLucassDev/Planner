import { Link } from 'react-router-dom';

import styles from './NavButton.module.css';

export default ({icon, routeTo, handle, name, activeButton}) =>{
    return(
        <>
            <Link className={styles.NavLink} to={routeTo}>
                <button onClick={handle} className={`${styles.NavButton} ${activeButton === name ? styles.active : ''}`}>
                        <img src={icon} alt="Icon" />
                </button>
            </Link>
        </>
    )
}