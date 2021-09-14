import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import objectFitImages from 'object-fit-images'

import { useTransitionFix } from '~/utils/hooks/useTransitionFix'

type Props = {
  children: React.ReactNode
  route: string
}

const PageWrap: React.FC<Props> = ({ children, route }) => {
  objectFitImages()
  const transitionCallback = useTransitionFix()
  const router = useRouter()

  // pageTransition 終わったら
  // const onComplete = () => {
  //   transitionCallback()
  //   if (typeof window !== 'undefined') {
  //     // Get the hash from the url
  //     const hashId = window.location.hash
  //     if (hashId) {
  //       // Use the hash to find the first element with that id
  //       const element = document.querySelector(hashId)

  //       if (element) {
  //         // Smooth scroll to that elment
  //         element.scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start',
  //           inline: 'nearest',
  //         })
  //       }
  //     }
  //   }
  // }

  return (
    <>
      {children}
      {/* <AnimatePresence exitBeforeEnter onExitComplete={onComplete}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key={router.route}
          // style={{ position: `${isFirstVisit ? 'fixed' : 'static'}` }}
        >
          {children}
        </motion.div>
      </AnimatePresence> */}
    </>
  )
}

export { PageWrap }
