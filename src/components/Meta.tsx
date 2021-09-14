import Head from 'next/head'
import { metaData } from '~/constants/metaData'

type Props = {
  id: string
}

const Meta: React.FC<Props> = ({ id }) => {
  const data = metaData.pages.find((page) => page.id === id)

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={metaData.base.domain + data.path} />
      <meta
        property="og:image"
        content={metaData.base.domain + metaData.base.ogp}
      />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta
        name="twitter:image:src"
        content={metaData.base.domain + metaData.base.ogp}
      />
      <meta name="twitter:domain" content={metaData.base.domain + data.path} />
      <link rel="canonical" href={metaData.base.domain + data.path} />
    </Head>
  )
}

export { Meta }
