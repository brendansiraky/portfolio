import { Project } from '../../../../../types/Landing'
import styles from './ProjectDescription.module.scss'

type ProjectDescriptionProps = Pick<Project, 'short_description' | 'long_description'> & {
    hiddenSection: (children: JSX.Element) => JSX.Element
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ short_description, long_description, hiddenSection }) => {
    return (
        <td colSpan={2} className="mobile-hide">
            <div className={styles.wrapper}>
                <p>{short_description}</p>
                {hiddenSection(
                    <div className={styles.fullDescriptionWrapper}>
                        <p>{long_description}</p>
                    </div>
                )}
            </div>
        </td>
    )
}