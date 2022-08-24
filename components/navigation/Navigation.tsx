import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../../model/context/GlobalContext'
import { LandingContext } from '../../model/context/LandingContext'
import { makeUrl } from '../../utility/makeUrl'
import { Platform } from '../shared'
import styles from './Navigation.module.scss'

export const Navigation: React.FC<{}> = () => {
    const { platforms } = useContext(LandingContext)

    return (
        <header data-aos="fade-up" className={styles.wrapper}>
            <nav className={styles.nav}>
                <div className={styles.logo} />
                <div className={styles.platformsWrapper}>{platforms.map(platform => <div key={platform.name} className={styles.platformWrapper}><Platform {...platform} /></div>)}</div>
            </nav>
        </header>
    )
}