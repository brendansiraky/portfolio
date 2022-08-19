import { useContext, useState } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import { Project } from './project/Project'
import styles from './Projects.module.scss'

export const Projects: React.FC<{}> = () => {
    const [focusedProjectIndex, setFocusedProjectIndex] = useState(0)
    const { projects } = useContext(LandingContext)

    const handleSetNextFocusedProject = () => {
        setFocusedProjectIndex(prev => prev + 1)
    }

    const handleSetPreviousFocusedProject = () => {
        setFocusedProjectIndex(prev => prev < 1 ? projects.length - 1 : prev - 1)
    }

    return (
        <section className={styles.wrapper}>
            <Project {...projects[focusedProjectIndex % projects.length]} />
            <div className={styles.navigationWrapper}>
                <div className={styles.back} onClick={handleSetPreviousFocusedProject} />
                {projects.map((project, index) => (
                    <div key={project.name} onClick={() => setFocusedProjectIndex(index)} className={`${styles.navigationItem} ${index === focusedProjectIndex % projects.length ? styles.active : ''}`} />
                ))}
                <div className={styles.forward} onClick={handleSetNextFocusedProject} />
            </div>
        </section>
    )
}