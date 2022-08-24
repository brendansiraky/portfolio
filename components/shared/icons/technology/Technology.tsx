import ExternalLink from '../../link/externalLink/ExternalLink'
import { Technology } from '../../../../types/Landing'
import { makeUrl } from '../../../../utility/makeUrl'
import styles from './Technology.module.scss'

type TechnologyProps = Technology

const Technology: React.FC<TechnologyProps> = ({ link, name }) => {
    return (
        <ExternalLink href={link}>
            <div className={`${styles.icon} ${styles[name]}`} />
        </ExternalLink>
    )
}

export default Technology