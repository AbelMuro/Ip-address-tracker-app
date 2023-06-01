import React from 'react';
import SearchBox from './SearchBox';
import styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.container}>
            <h1 className={styles.title}>
                IP Address Tracker
            </h1>
            <SearchBox/>
        </header>    
    )
}

export default Header;