import ExternalLink from '../../link/externalLink/ExternalLink'
import { Technology } from '../../../../types/Landing'
import { makeUrl } from '../../../../utility/makeUrl'
import styles from './Technology.module.scss'

type TechnologyProps = Technology

const Technology: React.FC<TechnologyProps> = ({ link, logo: { data: { attributes: { url } } } }) => {
    return (
        <ExternalLink href={link}>
            <div className={styles.image} style={{ backgroundImage: `url('${makeUrl(url)}')` }} />
        </ExternalLink>
    )
}

export default Technology