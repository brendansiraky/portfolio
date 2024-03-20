import { useContext } from 'react'

import { LandingContext } from '../model/context/LandingContext'

export const useFeaturedProjects = () => {
	const { projects } = useContext(LandingContext)
	return projects
		.filter((p) => typeof p.featured === 'number')
		.sort((a, b) => {
			// We know this will be a number based on our filter
			return (a.featured as number) - (b.featured as number)
		})
}
