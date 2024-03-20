import { ExternalLink } from '../../link/externalLink/ExternalLink'
import { Platforms } from '../../../../content/landing'
import styles from './Platform.module.scss'

type PlatformProps = Platforms[number]

export const Platform: React.FC<PlatformProps> = ({ link, name }) => {
	return (
		<ExternalLink href={link}>
			<div className={`${styles.icon} ${styles[name]}`} />
		</ExternalLink>
	)
}
