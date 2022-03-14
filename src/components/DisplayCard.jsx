import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

const DisplayCard = ({ title, date, description, image, url, reverse }) => {
    return (
        <Grid container sx={{ py: 5 }} direction={reverse ? 'row-reverse' : 'row'}>
            <Grid item xs={12} md={7} sx={{ px: 2 }}>
                <Link href={url} target={url === "/graphics" ? "_self" : "_blank"}>
                    <img style={{ objectFit: 'contain' }} width='100%' height='100%' src={image} />
                </Link>
            </Grid>
            <Grid item xs={12} md={5} sx={{ p: 2 }}>
                <Box>
                    <Typography variant='h2' color='textPrimary' sx={{ pb: 1 }}>{title}</Typography>
                    <Typography variant='h3' color='textPrimary' sx={{ pb: 1 }}>{date}</Typography>
                    <Typography color='textPrimary'>{description}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export { DisplayCard };