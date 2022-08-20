import { useContext } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import { Project } from './project/Project'
import styles from './Archives.module.scss'
import { SquareButton } from '../../shared'

const Archives = () => {
    const { archives } = useContext(LandingContext)

    return (
        <section className={styles.wrapper}>
            <div className={styles.headingWrapper}>
                <h2>Other Noteable Projects</h2>
                <div className={styles.separator} />
            </div>
            <ul>
                {archives.map(item => (
                    <Project key={item.name} {...item} />
                ))}
            </ul>
        </section>
    )
}

export default Archives