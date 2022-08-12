
import styles from './Me.module.scss'

type MeProps = {}

export const Me: React.FC<MeProps> = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div className={styles.image} />
            </div>
            <div className={styles.content}>
                <h1>About Me</h1>
                <div className={styles.separator} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Here are some technologies that I work with:</p>
                <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>NodeJs</li>
                    <li>Docker</li>
                    <li>NextJs</li>
                    <li>NestJs</li>
                    <li>Strapi</li>
                </ul>
            </div>
        </section>
    )
}