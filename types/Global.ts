import { Media } from './Media'

export type RawGlobal = {
    data: {
        id: number
        attributes: {
            createdAt: string
            updatedAt: string
            email: string
            name: string
            build: string
        }
    }
}

export type Global = Omit<RawGlobal['data']['attributes'], 'createdAt' | 'updatedAt'>