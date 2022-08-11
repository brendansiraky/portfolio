
import { SectionTitle } from '../section/SectionTitle'
import styles from './Me.module.scss'

type MeProps = {

}

export const Me: React.FC<MeProps> = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <SectionTitle title="About Me" />
                <div className={styles.contentWrapper}>
                    
                    <div className={styles.technologiesWrapper}>
                        <h4>Some of the technologies i've worked with:</h4>
                        <ul className={styles.list}>
                            <li>ReactJs (Web)</li>
                            <li>React Native (Mobile)</li>
                            <li>Javascript (ES6+)</li>
                            <li>Typescript</li>
                            <li>NodeJs</li>
                            <li>NextJs</li>
                            <li>NestJs</li>
                            <li>Laravel(PHP)</li>
                            <li>Strapi</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}