import { Sources } from '../../../../content/landing'
import ExternalLink from '../../link/externalLink/ExternalLink'
import styles from './Source.module.scss'

type SourceProps = Sources[number]

const Source: React.FC<SourceProps> = ({ name, link }) => {
	return (
		<ExternalLink href={link}>
			<div className={styles[name]} />
		</ExternalLink>
	)
}

export default Source
