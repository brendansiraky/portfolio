import { useContext } from 'react'

import ReactMarkdown from 'react-markdown'

import { GlobalContext } from '../../../model/context/GlobalContext'
import styles from './Hero.module.scss'

const Hero: React.FC<{}> = () => {
    const { name, build } = useContext(GlobalContext)

    return (
        <section className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div data-aos="fade-down" data-aos-delay="300" className={styles.intro}>
                    <h2>HI I'M</h2>
                    <div className={styles.line} />
                </div>
                <h1 data-aos="fade-down" data-aos-delay="300" >{name}</h1>
                <div data-aos="fade-up" data-aos-delay="400" className={styles.build}>I BUILD <span><ReactMarkdown children={build}/></span></div>
            </div>
        </section>
    )
}

export default Hero