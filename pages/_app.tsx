import App from "next/app"
import type { AppProps, AppContext } from 'next/app'

import { GlobalContext } from '../model/context/GlobalContext'
import { fetchSocials } from '../api/fetchSocials'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalContext.Provider value={{ socials: pageProps.socials }}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);

    const socials = await fetchSocials()

    return { 
        ...appProps, pageProps: 
        {
            socials
        }
    }
}

export default MyApp