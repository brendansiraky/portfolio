import ExternalLink from '../../link/externalLink/ExternalLink'
import { Library } from '../../../../types/Landing'
import styles from './Library.module.scss'

type LibraryProps = Library

const Library: React.FC<LibraryProps> = ({ name, link }) => {
    return (
        <ExternalLink href={link}>
            <div className={`${styles.library} ${styles[name]}`} />
        </ExternalLink>
    )
}

export default Library