import { StrapiCollection } from './StrapiData'

// Surely there is an easier way to merge a nested type without having to repeat data and attributes
/*
    type SocialAttributes = {
        platform: string,
        link: string
    }
    Ideally this: StrapiCollection<{ attributes: SocialAttributes }>
*/

export type RawSocials = {
    data: {
        attributes: {
            platform: string
            link: string
        }
    }[]
} & StrapiCollection

export type Socials = {
    platform: string
    link: string
}