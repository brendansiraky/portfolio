import { Naivigation } from '../../navigation/Navigation'
import { Email, Platforms } from '../../sidebars'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className={styles.wrapper}>
            <Naivigation />
            {children}
            <Email />
            <Platforms />
            <Footer />
        </main>
    )
}

export default Layout