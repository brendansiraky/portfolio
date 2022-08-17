import { Landing, RawLanding } from '../../types/Landing'

export const mapLanding = (rawLanding: RawLanding): Landing => {
    const { data: { attributes: { createdAt, updatedAt, ...rest } } } = rawLanding
    return {
        projects: rest.projects,
        platforms: rest.platforms
    }
}