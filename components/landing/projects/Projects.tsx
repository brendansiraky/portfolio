import { ProjectsTable } from './table/ProjectsTable'
import { SectionTitle } from '../section/SectionTitle'
import styles from './Projects.module.scss'

export const Projects = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <SectionTitle title="Projects" />
                <div className={styles.contentWrapper}>
                    <ProjectsTable />
                </div>
            </div>
        </section>
    )
}