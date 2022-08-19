import { useContext } from 'react'

import { LandingContext } from '../../../model/context/LandingContext'
import { Project } from './project/Project'
import styles from './Projects.module.scss'

export const Projects: React.FC<{}> = () => {
    const { projects } = useContext(LandingContext)
    const sunterra = projects[0]

    return (
        <section className={styles.wrapper}>
            <Project {...sunterra} />
        </section>
    )
}