import styles from './Button.module.scss'

type SquareButtonProps = {
    text: string
    onClick: () => void
}

const SquareButton: React.FC<SquareButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.squareButton}>
            {text}
        </button>
    )
}

export default SquareButton