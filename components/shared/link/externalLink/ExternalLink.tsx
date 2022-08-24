import styles from './ExternalLink.module.scss'

const ExternalLink: React.FC<{ href: string, children: JSX.Element }> = ({ href, children }) => {
    return <a className={styles.link} href={href} rel="noreferrer" target="_blank">{children}</a>
}

export default ExternalLink