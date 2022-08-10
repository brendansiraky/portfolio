import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
        </div>
    )
}