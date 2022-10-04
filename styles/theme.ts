import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#eff7fa',
            main: '#329542',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#568793',
            main: '#2F4F57',
            contrastText: '#aaaaaa',
        },
        background: {
            default: '#ffffff',
            paper: '#eff7fa',
        }
    },
    typography: {
        subtitle1: {
            fontSize: 12,
            lineHeight: 1
        },
        body1: {
          fontSize: 14,
        },
        body2: {
            fontSize: 16,
          }
      }
});