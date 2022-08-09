import { ProjectRow } from './ProjectRow'
import styles from './ProjectsTable.module.scss'

export const mockData = [
    {
        name: 'Sunterra (Frontend)',
        short_description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        full_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        languages_involved: ['react',]
    },
    {
        name: 'Sunterra (Backend)',
        short_description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        full_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        languages_involved: ['react']
    },
]

type ProjectsTableProps = {}

export const ProjectsTable: React.FC<ProjectsTableProps> = ({  }) => {
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
                {mockData.map((project) => (
                    <ProjectRow
                        key={project.name}
                        {...project}
                    />
                ))}
            </tbody>
        </table>
    )
}