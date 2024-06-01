import styles from './Navbar.module.css';

import NavButton from './ui/NavButton';

import AccountIcon from './icons/account_circle.png';
import HomeIcon from './icons/home_app_logo.png'
import AddIcon from "./icons/add_ad.png";

import { useState } from 'react';

export default ({activeButton, setActiveButton, setModalActive}) =>{

    

    

    return(
        <>
            <nav className={styles.Navbar}>
                <ul className={styles.navList}>
                    <li>
                        <NavButton routeTo='/app' name='home' activeButton={activeButton} icon={HomeIcon} handle={() => setActiveButton('home')}/>
                    </li>
                    <li className={styles.add}>
                        <NavButton className={styles.addButton} name='add' icon={AddIcon} handle={() => setModalActive(true)}/>
                    </li>
                    <li>
                        <NavButton routeTo='account' name='account' activeButton={activeButton} icon={AccountIcon} handle={() => setActiveButton('account')}/>
                    </li>
                </ul>
            </nav>
        </>
    )
}