import { createContext } from 'react'

import { Landing } from '../../types/Landing'

type LandingStoreContext = Landing

export const LandingContext = createContext<LandingStoreContext>(null as any)