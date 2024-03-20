import { ExternalLink } from '../../link/externalLink/ExternalLink'
import { Sources } from '../../../../content/landing'
import styles from './Source.module.scss'

type SourceProps = Sources[number]

export const Source: React.FC<SourceProps> = ({ name, link }) => {
	return (
		<ExternalLink href={link}>
			<div className={styles[name]} />
		</ExternalLink>
	)
}
