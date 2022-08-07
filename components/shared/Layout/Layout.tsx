import { Naivigation } from '../../navigation/Navigation'
import { Email, Socials } from '../../sidebars'
import { Footer } from '../Footer/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Naivigation />
            {children}
            <Email />
            <Socials />
            <Footer />
        </>
    )
}

export default Layout