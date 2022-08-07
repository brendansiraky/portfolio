import { GlobalContext } from '../../../model/context/GlobalContext'
import { Container } from '../container/Container'
import styles from './Socials.module.scss'

type SocialsProps = {}

export const ExternalLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
    return <a href={href} target="_blank">{children}</a>
}

const Socials: React.FC<SocialsProps> = () => {
    return (
        <GlobalContext.Consumer>
            {({ socials }) => (
                <Container position='left'>
                    <div className={styles.wrapper}>
                        <ul>
                            {socials.map(social => (
                                <li key={social.platform}>
                                    <ExternalLink href={social.link}>
                                        <svg className={styles[social.platform]} />
                                    </ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            )}
        </GlobalContext.Consumer>
    )
}

export default Socials