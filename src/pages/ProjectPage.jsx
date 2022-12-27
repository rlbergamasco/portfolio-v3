import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Footer, ProjectFooter, OvalButton, ToolCard } from 'components';

const ProjectPage = ({ project }) => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', pt: 6 }}>
            <Box sx={{ maxWidth: '1100px', px: 4, m: 'auto', pb: 3 }}>
                <Typography sx={{ fontSize: '3.4rem' }} color='textSecondary' variant="h1" align='center'>{project.title}</Typography>
                <Typography sx={{ pt: 1, pb: 3 }} color='textSecondary' variant='h3' align='center'>{project.category}</Typography>
                {project.graphics
                    ? project.graphics.map((project, i) => <Overview key={i} project={project} includeTitle />)
                    : <Overview project={project} />
                }
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

const Overview = ({ project, includeTitle }) => {
    return (
        <React.Fragment>
            <img width='100%' height='100%' alt={project.title} src={project.image} />
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">{includeTitle ? project.title : 'Overview'}</Typography>
            <Typography sx={{ py: 1 }} color='textSecondary'><b>Date:</b> {project.date}</Typography>
            <Typography sx={{ py: 1 }} color='textSecondary'><b>Description:</b> {project.description}</Typography>
            <Typography sx={{ py: 1 }} color='textSecondary'><b>Goal:</b> {project.goal}</Typography>
            <Typography sx={{ py: 1 }} color='textSecondary'><b>Created using:</b></Typography>
            <Grid container sx={{ pb: 4 }}>
                {project.tools.map((tool, i) => (
                    <Grid item key={i}>
                        <ToolCard tool={tool} />
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

Overview.defaultProps = {
    includeTitle: false,
};

export { ProjectPage };