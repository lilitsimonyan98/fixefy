import React from "react"
import {  Stack, Typography } from '@mui/material';
import { theme } from "../../styles/theme";

interface Props {
    label: string,
    value: string,
    color?: string,
    direction?: 'column-reverse'
    | 'column'
    | 'row-reverse'
    | 'row',
    fontStyle?: 'normal' | 'italic'
}

export const Details: React.FC<Props> = ({ label, value, color = theme.palette.secondary.main, direction = 'column', fontStyle = 'normal' }) => {

    return (
            <Stack flexDirection={direction}>
                <Typography  variant='subtitle1' color={theme.palette.secondary.contrastText} >
                    {label}
                </Typography>
                <Typography fontStyle={fontStyle} variant='body2' fontWeight={600} color={color}>
                    {value}
                </Typography>
            </Stack>
    )
}