import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Featured Project</h2>
            <h1>{title}</h1>
            <div className={styles.description}>
                <p>A Voxel-Styled MMORPG building on the cardano ecosystem.</p>
            </div>
        </div>
    )
}