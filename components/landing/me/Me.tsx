import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import { LandingContext } from '../../../model/context/LandingContext'
import { makeUrl } from '../../../utility/makeUrl'
import styles from './Me.module.scss'

const Me: React.FC<{}> = () => {
    const { me: { about, technologies, portrait, title } } = useContext(LandingContext)

    return (
        <section  className={styles.wrapper}>
            <div data-aos="fade-right" className={styles.imageWrapper}>
                <div className={styles.image} style={{ backgroundImage: `url('${makeUrl(portrait.data.attributes.url)}')` }} />
            </div>
            <div data-aos="fade-up" className={styles.content}>
                <h2>{title}</h2>
                <div className={styles.separator} />
                <ReactMarkdown children={about} />
                <ul>
                    {technologies.map(({ name }) => <li key={name}>{name}</li>)}
                </ul>
            </div>
        </section>
    )
}

export default Me