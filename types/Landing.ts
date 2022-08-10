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
}

export type Project = {
    id: string
    name: string
    short_description: string
    long_description: string
    libraries: Library[]
}

export type Library = {
    id: number
    name: string
    link: string
}