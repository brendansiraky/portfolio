import { Platform } from '../../../../types/Landing'
import ExternalLink from '../../link/externalLink/ExternalLink'
import styles from './Platform.module.scss'

type PlatformProps = Platform

const Platform: React.FC<PlatformProps> = ({ link, name }) => {

    return (
        <ExternalLink href={link}>
            <div className={`${styles.icon} ${styles[name]}`} />
        </ExternalLink>
    )
}

export default Platform