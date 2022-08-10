import { fetchAPI } from '../lib/api'
import { mapLanding } from '../model/mappers/mapLanding'
import { RawLanding } from '../types/Landing'

export const fetchLanding = async () => {
    const rawLanding = await fetchAPI(`/landing?populate[platforms][populate]&populate[projects][populate][0]=libraries`) as RawLanding
    return mapLanding(rawLanding)
}