import styles from './Container.module.scss'

type ContainerProps = {
    children: React.ReactNode
    position: 'left' | 'right'
    animationType: 'fade-left' | 'fade-right'
}

export const Container: React.FC<ContainerProps> = ({ children, position, animationType }) => {
    return (
        <div data-aos={animationType} className={`${styles.wrapper} ${styles[position]}`}>
            {children}
        </div>
    )
}