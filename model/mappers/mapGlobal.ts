import { RawGlobal, Global } from '../../types/Global'

export const mapGlobal = (rawGobal: RawGlobal): Global => {
    const { data: { attributes: { createdAt, updatedAt, ...rest } } } = rawGobal
    return {
        ...rest
    }
}