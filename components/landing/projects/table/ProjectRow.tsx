import { useAnimateHeight } from '../../../../hooks/useAnimateHeight'
import { EasyPeasySpinner, ReactSpinner } from '../../../shared/spinners/Spinners'
import { mockData } from './ProjectsTable'
import styles from './ProjectsTable.module.scss'

type ProjectRowProps = typeof mockData[number]

export const ProjectRow: React.FC<ProjectRowProps> = ({ short_description, full_description, name }) => {
    const [height, onToggle, hiddenSection] = useAnimateHeight()

    return (
        <>
            <tr valign='middle' onClick={onToggle} className={height ? styles.active : ''}>
                <td>
                    <h5>{name}</h5>
                    {hiddenSection(
                        <>
                            {/* <div className={styles.react} /> */}
                            {/* <div className={styles.easypeasy} /> */}
                            <ReactSpinner />
                            <EasyPeasySpinner />
                        </>
                    )}
                </td>
                <td colSpan={2} className="mobile-hide">
                    <p>{short_description}</p>
                    {hiddenSection(
                        <div style={{ padding: '20px 0' }}>
                            <p>{full_description}</p>
                        </div>
                    )}
                </td>
                <td></td>
            </tr>
        </>
    )
}

export const ReactImage = () => <div className={styles.react} />
export const EasyPeasyImage = () => <div className={styles.easypeasy} />