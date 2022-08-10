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