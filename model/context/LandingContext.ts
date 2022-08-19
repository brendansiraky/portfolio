import { createContext } from 'react'

import { Landing as LandingStoreContext } from '../../types/Landing'

export const LandingContext = createContext<LandingStoreContext>(null as any)