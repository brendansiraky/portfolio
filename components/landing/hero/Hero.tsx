import { useContext } from 'react'

import { GlobalContext } from '../../../model/context/GlobalContext'
import styles from './Hero.module.scss'

const Hero: React.FC<{}> = () => {
	const { name } = useContext(GlobalContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.innerWrapper}>
				<div
					data-aos="fade-down"
					data-aos-delay="300"
					className={styles.intro}
				>
					<h2>HI I&apos;M</h2>
					<div className={styles.line} />
				</div>
				<h1 data-aos="fade-down" data-aos-delay="300">
					{name}
				</h1>
				<div
					data-aos="fade-up"
					data-aos-delay="400"
					className={styles.build}
				>
					I BUILD
					<span>
						Mobile & Web
						<br />
						Applications
					</span>
				</div>
			</div>
		</section>
	)
}

export default Hero
