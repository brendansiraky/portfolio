import { RawSocials, Socials } from '../../types/Socials'

export const mapSocials = (rawSocials: RawSocials): Socials[] => {
    return rawSocials.data.map(rawSocial => ({
        platform: rawSocial.attributes.platform,
        link: rawSocial.attributes.link
    }))
}