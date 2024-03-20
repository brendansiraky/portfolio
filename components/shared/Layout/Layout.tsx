// import Platforms from '../../sidebars/platforms/Platforms'
// import { Navigation } from '../../navigation/Navigation'
// import Email from '../../sidebars/email/Email'
// import styles from './Layout.module.scss'

type LayoutProps = {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<main>
			{children}
			{/* <Navigation />
			<Email />
			<Platforms /> */}
		</main>
	)
}
