import { Project as ProjectType } from '../../../../types/Landing'
import { Platform, Technology } from '../../../shared'
import styles from './Project.module.scss'

type ProjectProps = ProjectType
export const Project: React.FC<ProjectProps> = ({ name, short_description, long_description, technologies }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h2>Featured Project</h2>
                <h1>{name}</h1>
                <div className={styles.description}>
                    <p>{short_description}</p>
                </div>
                <div className={styles.technologiesWrapper}>
                    {technologies.map(technology => <Technology key={technology.name} {...technology} />)}
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.image} />
                <div className={styles.imageDescription}>
                    <p>{long_description}</p>
                    {/* <Platform link="" id={1} name="github" logo={{ data: { attributes: { alternativeText: '', url: '' } } }} /> */}
                </div>
            </div>
        </div>
    )
}