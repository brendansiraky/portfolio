import { SquareButton } from '../../shared'
import styles from './Hero.module.scss'

const Hero: React.FC<{}> = () => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.name}>I'm Brendan,</h1>
            <h1 className={styles.title}>I'm a Software Developer.</h1>
            <p className={styles.description}>I specialize in <span>Mobile</span> and <span>Web Applications</span>, and i'm very passionate about <span>Blockchain Technology</span>.</p>
            <div className={styles.buttonWrapper}>
                <SquareButton
                    text="Get In Touch"
                    onClick={() => {}}
                />
            </div>
        </section>
    )
}

export default Hero