import { useState } from 'react'

import { useArchivedProjects } from '../../../hooks/useArchivedProjects'
import { Project } from './project/Project'
import { SquareButton } from '../../shared'
import styles from './Archives.module.scss'

const Archives = () => {
	const projects = useArchivedProjects()
	const [visibleArchives, setVisibleArchives] = useState(projects.slice(0, 8))

	const handleSetMoreVisibleArchives = () => {
		setVisibleArchives(projects)
	}

	const handleSetLessVisibleArchives = () => {
		setVisibleArchives(projects.slice(0, 8))
	}

	return (
		<section
			data-aos="fade-up"
			data-aos-delay="300"
			className={styles.wrapper}
		>
			<div className={styles.headingWrapper}>
				<h2>Other Noteable Projects</h2>
				<div className={styles.separator} />
			</div>
			<ul>
				{visibleArchives.map((item) => (
					<Project key={item.name} {...item} />
				))}
			</ul>
			<div className={styles.buttonWrapper}>
				{projects.length === visibleArchives.length ? (
					<SquareButton
						text="View Less"
						onClick={handleSetLessVisibleArchives}
					/>
				) : (
					<SquareButton
						text="View More"
						onClick={handleSetMoreVisibleArchives}
					/>
				)}
			</div>
		</section>
	)
}

export default Archives
