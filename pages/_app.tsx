import App from "next/app"
import type { AppProps, AppContext } from 'next/app'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);
    return { 
        ...appProps
    }
}

export default MyApp


/*
    TODO:
    - fix up media. Should create a mapper that maps it to something simpler, and also tacks on the makeUrl rather than it happening in every component that renders a background image.
    - Fix difference between serverside rendering problem. Props not being same.
    - Change all logos to svg's on backend.
*/