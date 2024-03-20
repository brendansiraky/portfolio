import { useEffect } from 'react'

import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import AOS from 'aos'

import { GlobalContext } from '../model/context/GlobalContext'
import { global, Global } from '../content/global'
import '../styles/global.scss'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps<Global>) {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 0,
		})
	}, [])

	return (
		<GlobalContext.Provider value={global}>
			<Component {...pageProps} />
		</GlobalContext.Provider>
	)
}

export default MyApp

/*
    TODO:
    - fix up media. Should create a mapper that maps it to something simpler, and also tacks on the makeUrl rather than it happening in every component that renders a background image.
    - Fix difference between serverside rendering problem. Props not being same.
    - Change all logos to svg's on backend.
    - makeUrl function should be used in the mappers not in the components themselves.
    - Wrap all animations in an Animation component that tacks on the data- attribute.
    - Move images to strapi and setup nginx server for backend.
    - Remove grid.
*/
