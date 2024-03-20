import { useState } from 'react'

import { useFeaturedProjects } from '../../../hooks/useFeaturedProjects'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Project } from './project/Project'
import styles from './Projects.module.scss'

const Projects: React.FC<{}> = () => {
	const [focusedIndex, setFocusedIndex] = useState(0)
	const projects = useFeaturedProjects()
	const isDevice = useMediaQuery('(max-width: 767px)')

	return (
		<section
			data-aos="fade-up"
			data-aos-offset="300"
			className={styles.wrapper}
		>
			{isDevice ? (
				projects.map((project) => (
					<div
						key={project.name}
						className={styles.mobileProjectWrapper}
					>
						<Project {...project} />
					</div>
				))
			) : (
				<Project {...projects[focusedIndex]} />
			)}
			{!isDevice && (
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
			)}
		</section>
	)
}

export default Projects
