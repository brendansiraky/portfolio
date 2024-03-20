import { useContext } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import styles from './Me.module.scss'

const Me: React.FC<{}> = () => {
	const {
		me: { about, title },
	} = useContext(LandingContext)

	return (
		<section className={styles.wrapper}>
			<div data-aos="fade-right" className={styles.imageWrapper}>
				<div className={styles.image} />
			</div>
			<div data-aos="fade-up" className={styles.content}>
				<h2>{title}</h2>
				<div className={styles.separator} />
				{about}
			</div>
		</section>
	)
}

export default Me
