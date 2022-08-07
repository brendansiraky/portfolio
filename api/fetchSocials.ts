import { mapSocials } from '../model/mappers/mapSocials'
import { RawSocials, Socials } from '../types/Socials'
import { fetchAPI } from '../lib/api'

export const fetchSocials = async (): Promise<Socials[]> => {
    const socials = await fetchAPI('/socials') as RawSocials
    return mapSocials(socials)
}