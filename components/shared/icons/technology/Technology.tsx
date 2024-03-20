import { Technologies } from '../../../../content/landing'
import { ExternalLink } from '../../link/externalLink/ExternalLink'
import styles from './Technology.module.scss'

type TechnologyProps = Technologies[number]

export const Technology: React.FC<TechnologyProps> = ({ link, name }) => {
	return (
		<ExternalLink href={link}>
			<div className={`${styles.icon} ${styles[name]}`} />
		</ExternalLink>
	)
}
