import { useState } from 'react'

import AnimateHeight from 'react-animate-height'

export const useAnimateHeight = () => {
    const [height, setHeight] = useState<number | 'auto'>(0)

    const handleToggle = () => setHeight(prevHeight => prevHeight === 0 ? 'auto' : 0)

    return [
        height,
        handleToggle,
        (children: JSX.Element) => (
            <AnimateHeight duration={500} height={height}>
                {children}
            </AnimateHeight>
        )
    ] as const
}