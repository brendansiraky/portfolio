import { createContext } from 'react'

type GlobalStoreContext = {
    socials: {
        platform: string
        link: string
    }[]
}

export const GlobalContext = createContext<GlobalStoreContext>(null as any)