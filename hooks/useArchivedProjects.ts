import { useContext } from 'react'

import { LandingContext } from '../model/context/LandingContext'

export const useArchivedProjects = () => {
	const { projects } = useContext(LandingContext)
	return projects.filter((p) => !p.featured)
}
