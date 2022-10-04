import { Theme } from "@mui/material";
import { GlobalStylesProps } from "@mui/styled-engine";


export const globalStyles: GlobalStylesProps<Theme>['styles'] = {
  html: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}