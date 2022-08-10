import { Project } from '../../../../../types/Landing'
import Library from '../../../../shared/icons/library/Library'
import styles from './ProjectNaming.module.scss'

type ProjectNamingProps = Pick<Project, 'name' | 'libraries'> & {
    hiddenSection: (children: JSX.Element) => JSX.Element
}

export const ProjectNaming: React.FC<ProjectNamingProps> = ({ name, libraries, hiddenSection }) => {
    return (
        <td>
            <div className={styles.wrapper}>
                <h3>{name}</h3>
                {hiddenSection(
                    <div className={styles.builtWithWrapper}>
                        <h4>Built with:</h4>
                        <div className={styles.logosWrapper}>
                            {libraries.map(library => <Library key={library.id} {...library} />)}
                        </div>
                    </div>
                )}
            </div>
        </td>
    )
}