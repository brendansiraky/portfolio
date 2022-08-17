import { Platform } from '../../../../types/Landing'
import { makeUrl } from '../../../../utility/makeUrl'
import ExternalLink from '../../link/externalLink/ExternalLink'
import styles from './Platform.module.scss'

type PlatformProps = Platform

const Platform: React.FC<PlatformProps> = ({ link, logo: { data: { attributes: { url } } } }) => {
    return (
        <ExternalLink href={link}>
            <div className={styles.image} style={{ backgroundImage: `url('${makeUrl(url)}')` }} />
        </ExternalLink>
    )
}

export default Platform