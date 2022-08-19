import { Source as SourceType } from '../../../../types/Landing'
import ExternalLink from '../../link/externalLink/ExternalLink'
import styles from './Source.module.scss'

type SourceProps = SourceType

export const Source: React.FC<SourceProps> = ({ name, link }) => {
    return (
        <ExternalLink href={link}>
            <div className={styles[name]} />
        </ExternalLink>
    )
}