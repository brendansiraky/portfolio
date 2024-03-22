import { useState } from 'react'

import { useFeaturedProjects } from '../../../hooks/useFeaturedProjects'
import { Mobile } from './project/mobile/Mobile'
import { Desktop } from './project/desktop/Desktop'
import styles from './Featured.module.scss'

const Featured: React.FC<{}> = () => {
	const [focusedIndex, setFocusedIndex] = useState(0)
	const projects = useFeaturedProjects()

	return (
		<section
			data-aos="fade-up"
			data-aos-offset="300"
			className={styles.wrapper}
		>
			<div className={styles.mobileFeaturedWrapper}>
				{projects.map((project) => (
					<Mobile key={project.name} {...project} />
				))}
			</div>

			<div className={styles.featuredWrapper}>
				<Desktop {...projects[focusedIndex]} />
				<div className={styles.navWrapper}>
					{projects.map(({ name }, index) => (
						<div
							key={name}
							className={`${styles.navItem} ${
								index === focusedIndex ? styles.active : ''
							}`}
							onClick={() => setFocusedIndex(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Featured
