import { useContext, useState } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import { Project } from './project/Project'
import { SquareButton } from '../../shared'
import styles from './Archives.module.scss'

const Archives = () => {
    const { archives } = useContext(LandingContext)
    const [visibleArchives, setVisibleArchives] = useState(archives.slice(0, 8))

    const handleSetMoreVisibleArchives = () => {
        setVisibleArchives(archives)
    }

    const handleSetLessVisibleArchives = () => {
        setVisibleArchives(archives.slice(0, 8))
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.headingWrapper}>
                <h2>Other Noteable Projects</h2>
                <div className={styles.separator} />
            </div>
            <ul>
                {visibleArchives.map(item => (
                    <Project key={item.name} {...item} />
                ))}
            </ul>
            <div className={styles.buttonWrapper}>
                {archives.length === visibleArchives.length
                    ?   <SquareButton
                            text="View Less"
                            onClick={handleSetLessVisibleArchives}
                        />
                    :   <SquareButton
                            text="View More"
                            onClick={handleSetMoreVisibleArchives}
                        />  
                }
         
            </div>
        </section>
    )
}

export default Archives