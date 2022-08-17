export type RawLanding = {
    data: {
        id: number
        attributes: {
            createdAt: string
            updatedAt: string
            platforms: Platform[]
            projects: Project[]
        }
    }
}

export type Landing = Omit<RawLanding['data']['attributes'], 'createdAt' | 'updatedAt'>

// Parts
export type Platform = {
    id: number
    name: string
    link: string
    logo: Media
}

export type Project = {
    id: string
    name: string
    short_description: string
    long_description: string
    technologies: Technology[]
}

export type Technology = {
    id: number
    name: string
    link: string
    logo: Media
}

// Move to more global type
export type Media = {
    data: {
        attributes: {
            alternativeText: string
            url: string
        }
    }
}