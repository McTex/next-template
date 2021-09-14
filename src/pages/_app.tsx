import * as React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import '../styles/common.scss'

import { PageWrap } from '~/components/templates/PageWrap'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <RecoilRoot>
        <PageWrap route={router.route}>
          <Component {...pageProps} key={router.route} />
        </PageWrap>
      </RecoilRoot>
    </>
  )
}

export default MyApp
