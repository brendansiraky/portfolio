import { ShadowContainer, Source, Technology } from '../../../shared'
import { Projects } from '../../../../content/landing'
import styles from './Project.module.scss'

type ProjectProps = Projects[number]

export const Project: React.FC<ProjectProps> = ({
	name,
	label,
	short_description,
	long_description,
	technologies,
	sources,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h2>Featured Project</h2>
				<h1>{label}</h1>
				<div className={styles.description}>
					<p>{short_description}</p>
				</div>
				<div className={styles.technologiesWrapper}>
					{technologies.map((technology) => (
						<Technology key={technology.name} {...technology} />
					))}
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.imageWrapper}>
					<div className={`${styles.image} ${styles[name]}`} />
				</div>
				<ShadowContainer className={styles.descriptionWrapper}>
					{long_description}

					<div className={styles.sourcesWrapper}>
						{sources.map((source) => (
							<div
								key={source.name}
								className={styles.sourceWrapper}
							>
								<Source {...source} />
							</div>
						))}
					</div>
				</ShadowContainer>
			</div>
		</div>
	)
}
