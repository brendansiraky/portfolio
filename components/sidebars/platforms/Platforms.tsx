import { useContext } from 'react'
import { LandingContext } from '../../../model/context/LandingContext'
import { Platform } from '../../shared'
import { Container } from '../container/Container'
import styles from './Platforms.module.scss'

type PlatformsProps = {}

const Platforms: React.FC<PlatformsProps> = () => {
    const { platforms } = useContext(LandingContext)

    return (
        <Container position='left'>
            <div className={styles.wrapper}>
                <ul>
                    {platforms.map(platform => (
                        <li key={platform.name} className={styles.platform}>
                            <Platform {...platform} />
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default Platforms