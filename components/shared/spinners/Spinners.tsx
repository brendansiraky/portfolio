import styles from './Spinners.module.scss'

const SPINNER_DIMENSION = 35

type SpinnerContainerProps = {
    text: string
    img: React.ReactNode
    cx?: number
    cy?: number
    r?: number
}

const SpinnerContainer: React.FC<SpinnerContainerProps> = ({ text, img, cx = SPINNER_DIMENSION, cy = SPINNER_DIMENSION, r = SPINNER_DIMENSION }) => {
    
    return (
        <div className={styles.wrapper}>
            <svg className={styles.svg} style={{ width: r * 4, height: r * 4 }}>
                <path
                    id="MyPath"
                    fill="none"
                    d={`
                        M ${(cx * 2) - r}, ${cy * 2}
                        a ${r},${r} 0 1,1 ${r * 2},0
                        a ${r},${r} 0 1,1 -${r * 2},0
                    `}
                >
                </path>
                <text dy="-5" style={{ color: '#fff' }}>
                    <textPath href="#MyPath" style={{ color: '#fff' }}>
                        {text}
                    </textPath>
                </text>
            </svg>
            <div className={styles.imgWrapperOuter} style={{ width: r * 4, height: r * 4 }}>
                <div className={styles.imgWrapperInner} style={{ height: r * 2, width: r * 2 }}>
                    {img}
                </div>
            </div>
        </div>
    )
}