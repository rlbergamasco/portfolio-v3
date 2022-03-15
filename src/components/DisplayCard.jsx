import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

const DisplayCard = ({ title, date, description, image, url, tools, reverse }) => {
    return (
        <Grid container sx={{ py: 5 }} direction={reverse ? 'row-reverse' : 'row'}>
            <Grid item xs={12} md={7} sx={{ p: 2 }}>
                <Box sx={{ overflow: 'hidden' }}>
                    <Box sx={{
                        transition: 'all .3s ease',
                        ":hover": {
                            transform: 'scale(1.1)',
                        },
                    }}>
                        <Link href={url} underline='none' target={url === "/graphics" ? "_self" : "_blank"}>
                            <img width='100%' height='100%' alt={title} src={image} />
                        </Link>
                    </Box></Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ p: 2 }}>
                <Box>
                    <Link href={url} target="_blank" underline='none' variant='h2' color='textPrimary'>{title}</Link>
                    <Typography variant='h3' color='textPrimary' sx={{ py: 1 }}>{date}</Typography>
                    <Typography color='textPrimary' sx={{ pb: 2 }}>{description}</Typography>
                    <Typography variant='h3' color='textPrimary'>Created using:</Typography>
                    <Grid container>
                        {tools.map((tool, i) => (
                            <Grid item key={i} sx={12} s={6}>
                                <ToolCard tool={tool} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid >
    );
};

const ToolCard = ({ tool }) => {
    const toolNames = {
        jquery: "jQuery",
        bulma: "Bulma",
        react: "ReactJS",
        mui: "Material UI",
        figma: "Figma",
        illustrator: "Illustrator",
        photoshop: "Photoshop",
        indesign: "InDesign",
        aftereffects: "After Effects",
        premierepro: "Premiere Pro"
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Box sx={{ pr: 2, py: 1 }}>
                <img style={{ objectFit: 'contain' }} alt={toolNames[tool]} width='58px' height='58px' src={`/logos/${tool}.png`} />
            </Box>
            <Typography sx={{ pr: 3 }} color='textPrimary'>{toolNames[tool]}</Typography>
        </Box>
    );
};

export { DisplayCard };