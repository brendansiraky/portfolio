
import { useContext } from 'react'

import { GlobalContext } from '../../../model/context/GlobalContext'
import { Container } from '../container/Container'
import styles from './Email.module.scss'

const Email: React.FC<{}> = () => {
    const { email } = useContext(GlobalContext)

    return (
        <Container position='right'>
            <span className={styles.text}>{email}</span>
        </Container>
    )
}

export default Email