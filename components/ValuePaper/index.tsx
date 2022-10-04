import React from "react"
import { Paper } from '@mui/material';
import { useStyles } from "./styles";
import Image from 'next/image';
import { theme } from "../../styles/theme";
import { Details } from "../Details";

interface Props {
    originalValue: number,
    fairValue: number,
    currency?: string
}

export const ValuePaper: React.FC<Props> = ({ originalValue, fairValue, currency = '$' }) => {
    const { classes } = useStyles();

    return (

        <Paper className={classes.paper}>
            <Details
                label={'Original Value'}
                value={currency + ' ' + originalValue.toFixed(2)}
                color={theme.palette.secondary.light}
                direction={'column-reverse'}
            />
            <Details
                label={'Fair Value'}
                value={currency + ' ' + fairValue.toFixed(2)}
                direction={'column-reverse'}
            />
            <Image src='/value_icon.svg' width={40} height={40}/>
        </Paper>
    )
}