import { Platform } from '../../../shared'
import { SectionTitle } from '../../section/SectionTitle'
import styles from './Featured.module.scss'

export const Featured = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <SectionTitle title="Sunterra" />
                <div className={styles.contentWrapper}>
                    <div className={styles.image} />
                    <div className={styles.imageDescription}>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        <p>demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                        <Platform link="" id={1} name="github" />
                    </div>
                </div>
            </div>
        </section>
    )
}