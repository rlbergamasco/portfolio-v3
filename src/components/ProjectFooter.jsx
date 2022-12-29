import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ProjectCard } from 'components';
import { projects } from 'utils/constants';

const ProjectFooter = ({ project }) => {
    return (
        <Box sx={{ py: 3, backgroundColor: '#1C1C1C' }}>
            <Typography variant='h2' color='textPrimary' align='center'>More Projects</Typography>
            <Grid container sx={{ px: 4, py: 2 }}>
                {projects.map(({ title, category, image, path }, i) => (
                    project.title === title
                        ? null
                        :
                        <Grid key={i} item xs={12} md={4} sx={{ px: 1 }}>
                            <ProjectCard title={title} category={category} image={image} path={path} />
                            {/* <img width='100%' height='100%' alt={title} src={image} /> */}
                        </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export { ProjectFooter };

// https://github.com/maxmarinich/react-alice-carousel