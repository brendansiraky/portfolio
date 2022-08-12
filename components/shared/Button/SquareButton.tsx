import styles from './Button.module.scss'

type SquareButtonProps = {
    text: string
    onClick: () => void
    variation?: '1' | '2'
}

const SquareButton: React.FC<SquareButtonProps> = ({ text, onClick, variation = '1' }) => {
    return (
        <button onClick={onClick} className={`${styles.squareButton} ${styles[`var-${variation}`]}`}>
            {text}
        </button>
    )
}

export default SquareButton