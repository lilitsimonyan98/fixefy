import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
   card: {
      width: 350,
      overflow: 'unset',
      position: 'relative',
      backgroundColor: theme.palette.background.default
   },
   header: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10,
      padding: '16px 25px',
   },
   headerTitle: {
      color: theme.palette.primary.contrastText,
      fontSize: 12,
      fontWeight: 300
   },
   subheader: {
      color: theme.palette.primary.contrastText,
      fontSize: 14,
      
      textTransform: 'capitalize',
   },
   badge: {
      position: 'absolute',
      left: 45,
      '& .MuiBadge-badge': {
         backgroundColor: theme.palette.background.default,
         borderColor: theme.palette.primary.main,
         borderStyle: 'solid',
         borderWidth: '1px',
         padding: '10px 20px',
         textTransform: 'capitalize',
      }
   },
   cellContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      margin: '20px 0',
   },
   cardActions: {
      margin: '20px',
      padding: '10px 0',
      borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
      justifyContent: 'space-between'
   },
   button: {
      borderRadius: 0,
      flex: 1,
      gap: 10
   }
}));