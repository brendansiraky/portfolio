import '../styles/globals.css'
import App from "next/app"
import type { AppProps, AppContext } from 'next/app'
import { fetchAPI } from '../lib/api'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const globalRes = await fetchAPI("/global", {
        populate: {
            favicon: "*",
            defaultSeo: {
                populate: "*",
            },
        },
    });
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp