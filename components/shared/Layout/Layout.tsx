import { Navigation } from '../../navigation/Navigation'
import { Email, Platforms } from '../../sidebars'
import styles from './Layout.module.scss'

type LayoutProps = {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<main className={styles.wrapper}>
			{children}
			<Navigation />
			<Email />
			<Platforms />
		</main>
	)
}
