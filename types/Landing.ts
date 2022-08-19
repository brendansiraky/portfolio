import { Media } from './Media'

export type RawLanding = {
    data: {
        id: number
        attributes: {
            createdAt: string
            updatedAt: string
            me: Me
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
    sources: Source[]
    image: Media
}

export type Me = {
    id: string
    about: string
    technologies: {
        name: string
    }[]
    portrait: Media
    title: string
}

export type Technology = {
    id: number
    name: string
    link: string
    logo: Media
}

export type Source = {
    name: string
    link: string
}