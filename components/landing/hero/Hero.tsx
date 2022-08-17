import styles from './Hero.module.scss'

const Hero: React.FC<{}> = () => {
    return (
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