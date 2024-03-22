import type { NextPage } from 'next'
import Head from 'next/head'

import { LandingLayout } from '../components/shared/layout/LandingLayout'
import { Hero, Me, Featured, Archives } from '../components/landing'
import { LandingContext } from '../model/context/LandingContext'
import { landing } from '../content/landing'

const Landing: NextPage = () => {
	return (
		<LandingContext.Provider value={landing}>
			<LandingLayout>
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
				<Featured />
				<Archives />
			</LandingLayout>
		</LandingContext.Provider>
	)
}

export default Landing
