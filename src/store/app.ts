import { atom } from 'recoil'

type colorThemeType = 'default' | 'navy' | 'pink' | 'yellow'

export const currentPageState = atom<string>({
  key: 'App/CurrentPageState',
  default: null,
})

export const firstVisitState = atom<boolean>({
  key: 'App/FirstVisitState',
  default: true,
})

export const navigationShowState = atom<boolean>({
  key: 'App/NavigationShowState',
  default: false,
})

export const colorThemeState = atom<colorThemeType>({
  key: 'App/ColorThemeState',
  default: 'default',
})

export const menuOpenState = atom<boolean>({
  key: 'App/MenuOpenState',
  default: false,
})

export const loadingState = atom<boolean>({
  key: 'App/LoadingState',
  default: false,
})

export const muteState = atom<boolean>({
  key: 'App/MuteState',
  default: false,
})

export const soundPartState = atom<number>({
  key: 'App/SoundPartState',
  default: 0,
})

export const progressState = atom<number>({
  key: 'App/ProgressState',
  default: 0,
})

export const panAnimationState = atom<boolean>({
  key: 'App/PanAnimationState',
  default: false,
})

export const bgVideoLoadState = atom<boolean>({
  key: 'App/BgVideoLoadState',
  default: false,
})
