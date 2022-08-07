import styles from './Container.module.scss'

type ContainerProps = {
    children: React.ReactNode
    position: 'left' | 'right'
}

export const Container: React.FC<ContainerProps> = ({ children, position }) => {
    return (
        <div className={`${styles.wrapper} ${styles[position]}`}>
            {children}
        </div>
    )
}