import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Footer, ProjectFooter, OvalButton } from 'components';

const ProjectPage = ({ project }) => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', pt: 6 }}>
            <Box sx={{ maxWidth: '1100px', px: 4, m: 'auto', pb: 3 }}>
                <Typography sx={{ fontSize: '3.4rem' }} color='textSecondary' variant="h1" align='center'>{project.title}</Typography>
                <Typography sx={{ pt: 1, pb: 3 }} color='textSecondary' variant='h3' align='center'>{project.category}</Typography>
                <img width='100%' height='100%' alt={project.title} src={project.image} />
                <Typography sx={{ pt: 4, pb: 1 }} color='textSecondary' variant="h2">Overview</Typography>
                <Typography sx={{ py: 1 }} color='textSecondary'><b>Date:</b> {project.date}</Typography>
                <Typography sx={{ py: 1 }} color='textSecondary'><b>Description:</b> {project.description}</Typography>
                <Typography sx={{ py: 1 }} color='textSecondary'><b>Goal:</b> {project.goal}</Typography>
                <Typography sx={{ py: 1 }} color='textSecondary'><b>Created using:</b></Typography>
                <Grid container>
                    {project.tools.map((tool, i) => (
                        <Grid item key={i}>
                            <ToolCard tool={tool} />
                        </Grid>
                    ))}
                </Grid>
                {project.url
                    ? <Box sx={{ pt: 1 }}>
                        <OvalButton href={project.url}>View Project</OvalButton>
                    </Box>
                    : null
                }
            </Box>
            <ProjectFooter project={project} />
            <Footer />
        </Box>
    )
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
            <Typography sx={{ pr: 3 }} color='textSecondary'>{toolNames[tool]}</Typography>
        </Box>
    );
};

export { ProjectPage };