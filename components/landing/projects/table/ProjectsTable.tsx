import { useContext } from 'react'

import { LandingContext } from '../../../../model/context/LandingContext'
import { ProjectRow } from './ProjectRow'
import styles from './ProjectsTable.module.scss'

type ProjectsTableProps = {}

export const ProjectsTable: React.FC<ProjectsTableProps> = ({  }) => {
    const { projects } = useContext(LandingContext)

    return (
        <table className={`${styles.table}`} cellSpacing={0}>
            <thead>
                <tr>
                    <th scope="col"><h4>Project</h4></th>
                    <th className="mobile-hide" scope="col"><h4>Description</h4></th>
                    <th scope="col"><h4>Learn More</h4></th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <ProjectRow
                        key={project.name}
                        {...project}
                    />
                ))}
            </tbody>
        </table>
    )
}