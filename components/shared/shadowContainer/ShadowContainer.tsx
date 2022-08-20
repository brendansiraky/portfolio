import styles from './ShadowContainer.module.scss'

type ShadowContainerProps = {
    children: React.ReactNode
    className?: string
}

const ShadowContainer: React.FC<ShadowContainerProps> = ({ children, className }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {children}
        </div>
    )
}

export default ShadowContainer