import { SectionTitle } from '../../section/SectionTitle'
import styles from './Featured.module.scss'

export const Featured = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <SectionTitle title="Sunterra" />
                <div className={styles.contentWrapper}>
                    <div className={styles.image} />
                </div>
            </div>
        </section>
    )
}