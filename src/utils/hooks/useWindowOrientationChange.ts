import { useEffect, useState } from 'react'

type WindowOrientation = number | string

function useWindowOrientationChange(): WindowOrientation {
  const [windowOrientation, setWindowOrientation] =
    useState<WindowOrientation>(0)

  useEffect(() => {
    const handler = () => {
      setTimeout(() => {
        setWindowOrientation(window.orientation)
      }, 300)
    }

    // Set size at the first client-side load
    handler()

    window.addEventListener('orientationchange', handler)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('orientationchange', handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowOrientation
}

export default useWindowOrientationChange
