import { useColorScheme } from 'react-native'

type ThemeType = 'light' | 'dark'

const themeVariants = {
  light: {
    backgroundPrimary: '#d0d2d8',
    backgroundSurface: '#FFFFFF',
    textPrimary: '#1E1E1E',
    textSecondary: '#828282',
    textReversed: '#FFFFFF',
    colorAccent: '#2C46B1',
    colorAccentHover: '#293679',
    borderPrimary: '#E4E6EC',
    borderSecondary: '#C3C5CB',
  },
  dark: {
    backgroundPrimary: '#212121',
    backgroundSurface: '#171717',
    textPrimary: '#f3f3f3',
    textSecondary: '#afafaf',
    textReversed: '#FFFFFF',
    colorAccent: '#3a83f7',
    colorAccentHover: '#2d63ba',
    borderPrimary: '#3A3A3A',
    borderSecondary: '#2A2A2A',
  },
}

const useThemeColors = () => {
  const currentTheme = useColorScheme() as ThemeType
  return themeVariants[currentTheme] || themeVariants.light
}

export default useThemeColors
