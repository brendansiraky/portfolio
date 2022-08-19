import App from "next/app"
import type { AppProps, AppContext } from 'next/app'

import { GlobalContext } from '../model/context/GlobalContext'
import { fetchGlobal } from '../api/fetchGlobal'
import { Global } from '../types/Global'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps<Global>) {
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
*/