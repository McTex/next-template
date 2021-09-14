export type pageNameList =
  | 'home'
  | 'about2050'
  | 'member'
  | 'news'
  | 'information'

export type pageDataType = {
  id: pageNameList
  title: string
  description: string
  path: string
  keywords: string
}

export type metaDataType = {
  base: {
    domain: string
    ogp: string
  }
  pages: pageDataType[]
}
