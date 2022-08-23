import { useEffect } from 'react'

import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import AOS from 'aos'

import { GlobalContext } from '../model/context/GlobalContext'
import { fetchGlobal } from '../api/fetchGlobal'
import { Global } from '../types/Global'
import 'aos/dist/aos.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps<Global>) {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 150,
        })
    }, [])

    return (
        <GlobalContext.Provider value={pageProps.global}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx)
    const global = await fetchGlobal()

    return { 
        ...appProps,
        pageProps: { global }
    }
}

export default MyApp


/*
    TODO:
    - fix up media. Should create a mapper that maps it to something simpler, and also tacks on the makeUrl rather than it happening in every component that renders a background image.
    - Fix difference between serverside rendering problem. Props not being same.
    - Change all logos to svg's on backend.
    - makeUrl function should be used in the mappers not in the components themselves.
    - Wrap all animations in an Animation component that tacks on the data- attribute.
*/