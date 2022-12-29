import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Footer, ProjectFooter, OvalButton, ToolCard } from 'components';
import '../styles.css'

const ProjectPage = ({ project }) => {
    if (project) {
        return (
            <React.Fragment>
                <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', px: 4 }}>
                    <Box sx={{ py: 3, maxWidth: '1260px', m: 'auto', position: 'sticky', top: 0 }}>
                        <Nav />
                    </Box>
                    <Box sx={{ maxWidth: '1060px', m: 'auto', pb: 3 }}>
                        <Typography sx={{ fontSize: '3.4rem' }} color='textSecondary' variant="h1" align='center'>{project.title}</Typography>
                        <Typography sx={{ pt: 1, pb: 3 }} color='textSecondary' variant='h3' align='center'>{project.category}</Typography>
                        {project.graphics
                            ? project.graphics.map((project, i) => <Overview key={i} project={project} includeTitle />)
                            : <Overview project={project} />
                        }
                    </Box>
                </Box>
                <ProjectFooter project={project} />
                <Footer />
            </React.Fragment>
        )
    } else {
        return (
            <Box></Box>
        )
    }

};

const Nav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <a href='/'><Typography variant='h4'>Riley Bergamasco</Typography></a>
            <Box sx={{ display: 'flex', flexGrow: 1 }} />
            <a href='/'><Typography sx={{ pl: 4 }}>Home</Typography></a>
            <a href='/#about'><Typography sx={{ pl: 4 }}>About</Typography></a>
            <a href='/#work'><Typography sx={{ pl: 4 }}>Work</Typography></a>
        </Box>
    )
}

const Overview = ({ project, includeTitle }) => {
    return (
        <Box sx={{ pb: 4 }}>
            <img width='100%' height='100%' alt={project.title} src={project.image} />
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">{includeTitle ? project.title : ''}</Typography>
            {Object.entries(project).map((item, i) =>
                item[0] === 'date' || item[0] === 'goal' || item[0] === 'description' || item[0] === 'process'
                    ? <Typography sx={{ py: 1 }} color='textSecondary'>
                        <span style={{ textTransform: 'capitalize' }}><b>{item[0]}:</b></span> {item[1]}
                    </Typography>
                    : null
            )}
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
            {project.path === '/goodreads'
                ? <Goodreads />
                : null
            }
        </Box>
    )
}

Overview.defaultProps = {
    includeTitle: false,
};

const Goodreads = () => {
    return (
        <React.Fragment>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Usability Test</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Personas</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Content Structure</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Wireframes</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Design System</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Mockups</Typography>
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">Pitch</Typography>
        </React.Fragment>
    )
}

export { ProjectPage };