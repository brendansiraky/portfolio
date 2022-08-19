import { Media } from './Media'

export type RawGlobal = {
    data: {
        id: number
        attributes: {
            createdAt: string
            updatedAt: string
            logo: Media
        }
    }
}

export type Global = Omit<RawGlobal['data']['attributes'], 'createdAt' | 'updatedAt'>