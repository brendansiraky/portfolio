import { mapGlobal } from '../model/mappers/mapGlobal'
import { RawGlobal } from '../types/Global'
import { fetchAPI } from '../lib/api'

export const fetchGlobal = async () => {
    const rawGlobal = await fetchAPI(`/global`, {
        populate: {
            logo: {
                populate: '*'
            },
        }
    }) as RawGlobal

    return mapGlobal(rawGlobal)
}