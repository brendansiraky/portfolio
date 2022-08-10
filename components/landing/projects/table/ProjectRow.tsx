import { useAnimateHeight } from '../../../../hooks/useAnimateHeight'
import { ProjectDescription } from './projectDescription/ProjectDescription'
import { ProjectNaming } from './projectNaming/ProjectNaming'
import { Project } from '../../../../types/Landing'
import styles from './ProjectsTable.module.scss'

type ProjectRowProps = Project

export const ProjectRow: React.FC<ProjectRowProps> = ({ name, short_description, long_description, libraries }) => {
    const [height, onToggle, hiddenSection] = useAnimateHeight()

    return (
        <tr valign='middle' onClick={onToggle} className={height ? styles.active : ''}>
            <ProjectNaming {...{ name, libraries, hiddenSection }} />
            <ProjectDescription {...{ long_description, short_description, hiddenSection, libraries }} />
            <td></td>
        </tr>
    )
}