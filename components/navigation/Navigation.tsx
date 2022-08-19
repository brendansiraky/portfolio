import React, { useContext } from 'react'

import { GlobalContext } from '../../model/context/GlobalContext'
import { makeUrl } from '../../utility/makeUrl'
import styles from './Navigation.module.scss'

export const Navigation: React.FC<{}> = () => {
    const { logo } = useContext(GlobalContext)

    return (
        <header className={styles.wrapper}>
            <nav className={styles.nav}>
                <img src={makeUrl(logo.data.attributes.url)} className={styles.logo} />
            </nav>
        </header>
    )
}