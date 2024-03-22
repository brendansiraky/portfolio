import React from 'react'
import Image from 'next/image'

import { Technology } from '../../../../shared/icons/technology/Technology'
import { Source } from '../../../../shared/icons/source/Source'
import { Projects } from '../../../../../content/landing'
import styles from './Mobile.module.scss'

type MobileProps = Projects[number]
export const Mobile: React.FC<MobileProps> = ({
	label,
	long_description,
	technologies,
	sources,
	img,
}) => {
	return (
		<div className={styles.mobileFeatured}>
			<div className={styles.imageWrapper}>
				<Image
					src={img?.src || ''}
					layout="fill"
					alt={img?.alt}
					className={styles.image}
				/>
			</div>
			<h2>Featured Project</h2>
			<h1>{label}</h1>
			<div className={styles.descriptionWrapper}>{long_description}</div>
			<div className={styles.iconsWrapper}>
				<div className={styles.technologiesWrapper}>
					{technologies.map((technology) => (
						<Technology key={technology.name} {...technology} />
					))}
				</div>
				<div className={styles.sourcesWrapper}>
					{sources.map((source) => (
						<div key={source.name} className={styles.sourceWrapper}>
							<Source {...source} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
