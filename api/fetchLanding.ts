import { fetchAPI } from '../lib/api'
import { mapLanding } from '../model/mappers/mapLanding'
import { RawLanding } from '../types/Landing'

export const fetchLanding = async () => {
    const rawLanding = await fetchAPI(`/landing`, {
        populate: {
            me: {
                populate: '*'
            },
            platforms: {
                populate: '*'
            },
            projects: {
                populate: {
                    technologies: {
                        populate: '*'
                    },
                    sources: {
                        populate: '*'
                    },
                    image: {
                        populate: '*'
                    }
                },
            }
        }
    }) as RawLanding

    return mapLanding(rawLanding)
}