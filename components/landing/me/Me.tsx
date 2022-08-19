import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import { LandingContext } from '../../../model/context/LandingContext'
import styles from './Me.module.scss'

export const Me: React.FC<{}> = () => {
    const { me: { about, technologies } } = useContext(LandingContext)

    return (
        <section className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div className={styles.image} />
            </div>
            <div className={styles.content}>
                <h1>About Me</h1>
                <div className={styles.separator} />
                <ReactMarkdown children={about} />
                <ul>
                    {technologies.map(({ name }) => <li key={name}>{name}</li>)}
                </ul>
            </div>
        </section>
    )
}