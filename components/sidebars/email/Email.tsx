
import { Container } from '../container/Container'
import styles from './Email.module.scss'

const Email: React.FC<{}> = () => {
    return (
        <Container position='right'>
            <span className={styles.text}>brendansirakydeveloper@gmail.com</span>
        </Container>
    )
}

export default Email