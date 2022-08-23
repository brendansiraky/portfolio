
import { useContext } from 'react'

import { GlobalContext } from '../../../model/context/GlobalContext'
import { Container } from '../container/Container'
import styles from './Email.module.scss'

const Email: React.FC<{}> = () => {
    const { email } = useContext(GlobalContext)

    const handleClick = () => window.open(`mailto:${email}`)

    return (
        <Container position="right" animationType="fade-left">
            <span onClick={handleClick} className={styles.text}>{email}</span>
        </Container>
    )
}

export default Email