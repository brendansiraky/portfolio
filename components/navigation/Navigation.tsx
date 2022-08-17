import React from 'react'

import styles from './Navigation.module.scss'

export const Navigation: React.FC<{}> = () => {
    return (
        <header className={styles.wrapper}>
            <nav className={styles.nav}>
                <div className={styles.logo} />
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}