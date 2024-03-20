import { ShadowContainer } from '../../../shared/shadowContainer/ShadowContainer'
import { Technology } from '../../../shared/icons/technology/Technology'
import { Source } from '../../../shared/icons/source/Source'
import { Projects } from '../../../../content/landing'
import styles from './Project.module.scss'

type ProjectProps = Projects[number]

export const Project: React.FC<ProjectProps> = ({
	name,
	short_description: description,
	technologies,
	sources,
}) => {
	return (
		<li>
			<ShadowContainer className={styles.wrapper}>
				<div>
					<div className={styles.bannerWrapper}>
						<svg className={styles.icon} />
						<div className={styles.sourcesWrapper}>
							{sources?.map((source) => (
								<div
									key={source.name}
									className={styles.sourceWrapper}
								>
									<Source {...source} />
								</div>
							))}
						</div>
					</div>
					<div className={styles.titleWrapper}>
						<h3>{name}</h3>
					</div>
					<div className={styles.descriptionWrapper}>
						{description}
					</div>
				</div>
				<div className={styles.technologiesWrapper}>
					{technologies.map((technology) => (
						<div
							key={technology.name}
							className={styles.technologyWrapper}
						>
							<Technology {...technology} />
						</div>
					))}
				</div>
			</ShadowContainer>
		</li>
	)
}
