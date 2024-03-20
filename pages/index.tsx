import type { NextPage } from 'next'
import Head from 'next/head'

import { Hero, Me, Projects, Archives } from '../components/landing'
import { LandingContext } from '../model/context/LandingContext'
import { Layout } from '../components/shared/layout/Layout'
import { landing } from '../content/landing'

const Landing: NextPage = () => {
	return (
		<LandingContext.Provider value={landing}>
			<Layout>
				<Head>
					<title>Brendan Hemat-Siraky | Portfoilio</title>
					<meta
						name="description"
						content="Brendan is a Full Stack developer that specialises in building Mobile and Web Applications"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Hero />
				<Me />
				<Projects />
				<Archives />
			</Layout>
		</LandingContext.Provider>
	)
}

export default Landing
