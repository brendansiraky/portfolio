import React from 'react'

import styles from './Navigation.module.scss'

export const Naivigation: React.FC<{}> = () => {
    return (
        <header className={styles.wrapper}>
            <nav className={styles.nav}>
                <div>Logo</div>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </nav>
        </header>
    )
}