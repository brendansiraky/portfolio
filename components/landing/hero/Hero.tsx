import { SquareButton } from '../../shared'
import styles from './Hero.module.scss'

const Hero: React.FC<{}> = () => {
    return (
        // <section className={styles.wrapper}>
        //     <h1 className={styles.name}>I'm Brendan,</h1>
        //     <h1 className={styles.title}>I build things for the <span>web.</span></h1>
        //     <p className={styles.description}>I am a software developer specializing in <span>Mobile</span> and <span>Web Applications</span>, and i'm very passionate about <span>Blockchain Technology</span>.</p>
        //     <div className={styles.buttonWrapper}>
        //         <SquareButton
        //             text="Get In Touch"
        //             onClick={() => {}}
        //         />
        //     </div>
        // </section>
        <section className={styles.wrapper}>
            <div style={{ textAlign: 'right' }}>
                <div className={styles.intro}>
                    <h2>HI I'M</h2>
                    <div className={styles.line} />
                </div>
                <h1>BRENDAN</h1>
                <span>I BUILD <span className={styles.colored}>MOBILE & WEB<br />APPLICATIONS</span></span>
            </div>
        </section>
    )
}

export default Hero