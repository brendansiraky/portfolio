import { ProjectsTable } from './table/ProjectsTable'
import styles from './Projects.module.scss'

export const Projects = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.titleWrapper}>
                    <h1>Projects</h1>
                </div>
                <div className={styles.contentWrapper}>
                    <ProjectsTable />
                </div>
            </div>
        </section>
    )
}