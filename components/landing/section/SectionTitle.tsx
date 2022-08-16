import { Library as LibraryType } from '../../../types/Landing'
import Library from '../../shared/icons/library/Library'
import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title: string
}

const technologies: LibraryType[] = [
    { id: 1, name: 'reactjs', link: '' },
    { id: 1, name: 'easy-peasy', link: '' },
    { id: 1, name: 'typescript', link: '' },
    // { id: 1, name: '', link: '' },
    // { id: 1, name: '', link: '' },
]

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Featured Project</h2>
            <h1>{title}</h1>
            <div className={styles.description}>
                <p>A Voxel-Styled MMORPG building on the cardano ecosystem.</p>
            </div>
            <div className={styles.technologiesWrapper}>
                {technologies.map(library => <Library key={library.id} {...library} />)}
            </div>
        </div>
    )
}