import styles from './ExternalLink.module.scss'

export const ExternalLink: React.FC<{
	href: string
	children: JSX.Element | string
}> = ({ href, children }) => {
	return (
		<a className={styles.link} href={href} rel="noreferrer" target="_blank">
			{children}
		</a>
	)
}
