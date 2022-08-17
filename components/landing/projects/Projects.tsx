import { Project as ProjectType } from '../../../types/Landing'
import { Project } from './project/Project'
import styles from './Projects.module.scss'

type ProjectsProps = {
    projects: ProjectType[]
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const sunterra = projects[0]
    return (
        <section className={styles.wrapper}>
            <Project {...sunterra} />
        </section>
    )
}