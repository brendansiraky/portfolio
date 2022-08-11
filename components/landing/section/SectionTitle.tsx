import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            {/* <div className={styles.description}>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
            </div> */}
        </div>
    )
}