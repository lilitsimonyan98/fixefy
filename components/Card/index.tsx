import React from "react"
import { Card as CardMui, CardHeader, CardContent, CardActions, IconButton, Badge, Box, Typography } from '@mui/material';
import { useStyles } from "./styles";
import { theme } from "../../styles/theme";
import Image from 'next/image';
import { ValuePaper } from "../ValuePaper";
import { Details } from "../Details";

import { Data } from "../../data/demoData";

interface Props {
    data: Data
}

export const Card: React.FC<Props> = ({ data }) => {
    const { classes } = useStyles();

    return (

        <CardMui className={classes.card}>

            <Badge
                className={classes.badge}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                badgeContent={data.status}
            />

            <CardHeader
                avatar={
                    <Image src='/card_icon.svg' width={35} height={35}/>
                }
                className={classes.header}
                classes={{ title: classes.headerTitle, subheader: classes.subheader }}
                title="ID"
                subheader={data.readable_id}
                titleTypographyProps={{ variant: 'h6' }}
            />

            <CardContent>

                {/* Difference of values */}
                <ValuePaper originalValue={data.extended.original_value} fairValue={data.value} />

                {/* Information about reference */}
                <Box className={classes.cellContainer}>
                    <Details
                        label={'Seller Reference'}
                        value={data.extended.seller.reference[0] || ''}
                    />
                    <Details
                        label={'Buyer Reference'}
                        value={data.extended.buyer.reference[0] || ''}
                    />
                </Box>

                {/* Event description */}
                <Box className={classes.cellContainer}>
                    <Details
                        label={'Event'}
                        fontStyle={'italic'}
                        value={data.service.title}
                        color={theme.palette.secondary.light}
                    />
                </Box>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <IconButton className={classes.button}>
                    <Image src='/recocile_icon.svg' width={20} height={20}/>
                    <Typography textTransform='uppercase' variant='subtitle1' color={theme.palette.secondary.light} >
                        Reconcile
                    </Typography>
                </IconButton>
                <IconButton className={classes.button}>
                    <Image src='/approve_icon.svg' width={20} height={20}/>
                    <Typography textTransform='uppercase' variant='subtitle1' color={theme.palette.secondary.light} >
                        Approve
                    </Typography>
                </IconButton>
            </CardActions>

        </CardMui>

    )
}