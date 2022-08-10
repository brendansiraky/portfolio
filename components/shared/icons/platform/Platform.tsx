import { Platform } from '../../../../types/Landing'
import ExternalLink from '../../link/externalLink/ExternalLink'
import styles from './Platform.module.scss'

type PlatformProps = Platform

const Platform: React.FC<PlatformProps> = ({ name, link }) => {
    return (
        <ExternalLink href={link}>
            <svg className={styles[name]} />
        </ExternalLink>
    )
}

export default Platform