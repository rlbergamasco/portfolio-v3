import React from 'react';
import { Box, Typography } from '@mui/material';

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
        premierepro: "Premiere Pro",
        procreate: "Procreate",
        fresco: "Fresco",
        xd: "Adobe XD"
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Box sx={{ pr: 2, py: 1 }}>
                <img style={{ objectFit: 'contain' }} alt={toolNames[tool]} width='58px' height='58px' src={`/logos/${tool}.png`} />
            </Box>
            <Typography sx={{ pr: 3 }} color='textSecondary'>{toolNames[tool]}</Typography>
        </Box>
    );
};

export { ToolCard };