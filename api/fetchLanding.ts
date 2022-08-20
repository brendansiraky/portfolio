import { fetchAPI } from '../lib/api'
import { mapLanding } from '../model/mappers/mapLanding'
import { RawLanding } from '../types/Landing'

export const fetchLanding = async () => {
    const rawLanding = await fetchAPI(`/landing`, {
        populate: {
            me: {
                populate: {
                    portrait: {
                        populate: '*'
                    },
                    technologies: {
                        populate: '*'
                    }
                }
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
            },
            archives: {
                populate: {
                    technologies: {
                        populate: '*'
                    },
                    sources: {
                        populate: '*'
                    }
                }
            }
        }
    }) as RawLanding

    return mapLanding(rawLanding)
}