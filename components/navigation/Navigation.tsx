import React, { useContext } from 'react'

import { LandingContext } from '../../model/context/LandingContext'
import { Platform } from '../shared/icons/platform/Platform'
import styles from './Navigation.module.scss'

export const Navigation: React.FC<{}> = () => {
	const { platforms } = useContext(LandingContext)

	return (
		<header data-aos="fade-up" className={styles.wrapper}>
			<nav className={styles.nav}>
				<div className={styles.logo} />
				<div className={styles.platformsWrapper}>
					{platforms.map((platform) => (
						<div
							key={platform.name}
							className={styles.platformWrapper}
						>
							<Platform {...platform} />
						</div>
					))}
				</div>
			</nav>
		</header>
	)
}
