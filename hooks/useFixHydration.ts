import { useEffect, useState } from 'react'

export const useFixHydration = () => {
	const [showContent, setShowContent] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowContent(true)
		}, 100)
	}, [])

	return showContent
}
