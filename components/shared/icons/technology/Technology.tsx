import ExternalLink from '../../link/externalLink/ExternalLink'
import { Technologies } from '../../../../content/landing'
import styles from './Technology.module.scss'

type TechnologyProps = Technologies[number]

const Technology: React.FC<TechnologyProps> = ({ link, name }) => {
	return (
		<ExternalLink href={link}>
			<div className={`${styles.icon} ${styles[name]}`} />
		</ExternalLink>
	)
}

export default Technology
