import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    paper: {
        padding: 20,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}));