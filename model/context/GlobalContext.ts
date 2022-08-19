import { createContext } from 'react'

import { Global as GlobalStoreContext } from '../../types/Global'

export const GlobalContext = createContext<GlobalStoreContext>(null as any)