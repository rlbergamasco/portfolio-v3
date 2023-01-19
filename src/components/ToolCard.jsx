import React from 'react';
import { Box, Typography } from '@mui/material';

const ToolCard = ({ tool }) => {
    const toolNames = {
        jquery: "jQuery",
        bulma: "Bulma",
        react: "React",
        mui: "Material UI",
        figma: "Figma",
        illustrator: "Illustrator",
        photoshop: "Photoshop",
        indesign: "InDesign",
        aftereffects: "After Effects",
        premierepro: "Premiere Pro",
        procreate: "Procreate",
        fresco: "Fresco",
        xd: "Adobe XD",
        node: "Node.js",
        javascript: "JavaScript",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        wall: "8th Wall",
        redux: "Redux",
        aframe: "A-Frame"
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pt: 1, pb: 2 }} >
            <Box sx={{ pr: 2 }}>
                <img style={{ objectFit: 'contain' }} alt={toolNames[tool]} width='58px' height='58px' src={`/logos/${tool}.png`} />
            </Box>
            <Typography sx={{ pr: 6 }} color='textSecondary'>{toolNames[tool]}</Typography>
        </Box>
    );
};

export { ToolCard };