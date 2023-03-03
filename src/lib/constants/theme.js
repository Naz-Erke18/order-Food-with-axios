import { store } from '../../store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#8a2b06',
      light: '#8a2b06',
      dark: '#8a2b06',
      constrastText: '#00000',
    },
    secondary: {
      main: '#8a2b06',
      light: '#ffe1e1',
      dark: '#48085',
      constrastText: '#FFFF',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: 'bisque',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const darkTheme = {
  palette: {
    primary: {
      main: 'rgb(27,24,184)',
      light: 'rgb(27,24,184)',
      dark: 'rgb(27,24,184)',
      constrastText: '#FFFF',
    },
    secondary: {
      main: 'rgb(27,24,184)',
      light: 'rgb(27,24,184)',
      dark: 'rgb(27,24,184)',
      constrastText: '#FFFF',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: '#fff',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode
  return currentTheme === 'light' ? lightTheme : darkTheme
}
