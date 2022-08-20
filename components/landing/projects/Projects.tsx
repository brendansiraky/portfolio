import { useContext, useState } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import { Project } from './project/Project'
import styles from './Projects.module.scss'

const Projects: React.FC<{}> = () => {
    const { projects } = useContext(LandingContext)
    const [focusedIndex, setFocusedIndex] = useState(0)

    return (
        <section className={styles.wrapper}>
            <Project {...projects[focusedIndex]} />
            <div className={styles.navWrapper}>
                {projects.map(({ name }, index) => (
                    <div 
                        key={name} 
                        className={`${styles.navItem} ${index === focusedIndex ? styles.active : ''}`}
                        onClick={() => setFocusedIndex(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects