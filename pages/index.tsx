import type { NextPage } from 'next'
import Head from 'next/head'

import { LandingContext } from '../model/context/LandingContext'
import { fetchLanding } from '../api/fetchLanding'
import { Layout } from '../components/shared'
import { Hero, Me, Projects, Archives } from '../components/landing'
import { Landing } from '../types/Landing'

const Landing: NextPage<Landing> = (landing) => {
    return (
        <LandingContext.Provider value={landing}>
            <Layout>
                <Head>
                    <title>Brendan Hemat-Siraky</title>
                    <meta name="description" content="Brendan is a Full Stack developer that specialises in building Mobile and Web Applications" />
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

export async function getStaticProps() {
    const landing = await fetchLanding()

    return {
        props: {
            ...landing
        },
    }
}

export default Landing