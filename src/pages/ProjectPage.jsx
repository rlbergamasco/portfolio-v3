import React, { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Footer, ProjectFooter, OvalButton, ToolCard } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import '../styles.css'

const ProjectPage = ({ project }) => {
    const [navPosition, setNavPosition] = useState('0');

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setNavPosition('0');
        } else {
            setNavPosition('-80px');
        }
        prevScrollpos = currentScrollPos;
    }

    if (project) {
        return (
            <React.Fragment>
                <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', px: 4 }}>
                    <Box sx={{
                        backgroundColor: '#f5f5f5',
                        py: 3,
                        maxWidth: '1260px',
                        m: 'auto',
                        position: 'sticky',
                        top: navPosition,
                        transition: 'top 0.4s',
                        zIndex: 1000
                    }}>
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
        <Box id='nav' sx={{ display: 'flex' }}>
            <a href='/'><Typography variant='h5'>Riley Bergamasco</Typography></a>
            <Box sx={{ display: 'flex', flexGrow: 1 }} />
            {/* <a href='/'><Typography sx={{ pl: 4 }}>Home</Typography></a> */}
            <a href='/#about'><Typography sx={{ pl: 4 }}>About</Typography></a>
            <a href='/#work'><Typography sx={{ pl: 4 }}>Work</Typography></a>
        </Box>
    )
}

const Overview = ({ project, includeTitle }) => {

    const getColor = (award) => {
        const gold = "#d4af37"
        const silver = "#aaa9ad"
        const bronze = "#967444"
        if (award === '1') {
            return gold
        } else if (award === '2') {
            return silver
        } else {
            return bronze
        }
    }

    return (
        <Box sx={{ pb: 4 }}>
            <img width='100%' height='100%' alt={project.title} src={project.image} />
            <Typography sx={{ pt: 2, pb: 1 }} color='textSecondary' variant="h2">{includeTitle ? project.title : ''}</Typography>
            {Object.entries(project).map((item, i) =>
                item[0] === 'date' || item[0] === 'goal' || item[0] === 'description' || item[0] === 'process'
                    ? <Typography key={i} sx={{ py: 1 }} color='textSecondary'>
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
                    <OvalButton href={project.url}>
                        {project.category === 'UX Design' ? 'View Full Prototype' : 'View Project'}
                    </OvalButton>
                </Box>
                : null
            }
            {project.awards
                ? project.awards.map((award, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faTrophy} size='lg' color={getColor(award.charAt(0))} />
                        <p style={{ margin: '0.5em 0 0.5em 0.5em' }}>{award} — 2023 Society for News Design International Student Competition</p>
                    </Box>
                ))
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
    const personaImgs = ['persona-1', 'empathy-1', 'persona-2', 'empathy-2'];
    const panels = ['start', 'login', 'signup', 'book-details', 'home', 'discover', 'bookshelf', 'profile', 'notifications', 'friends', 'recommended', 'search'];
    const headingStyle = {
        pt: 6,
        pb: 2
    }
    const imgStyle = {
        width: '100%',
        borderRadius: '0.8rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
    }

    return (
        <React.Fragment>
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Usability Test</Typography>
            <iframe style={{ aspectRatio: '15.1 / 9', width: '100%', height: '100%' }}
                src="https://docs.google.com/presentation/d/e/2PACX-1vS1vFiPMTsu_U76GCC9x0bRRB62BrvkosExkC21_0cv126IjkvE0rSFM7MhWkqVyuuPpl5e0uIy8yYo/embed?start=false&loop=false&delayms=5000"
                frameBorder={0} allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true">
                Your browser doesn't support iframes.
            </iframe>
            {/* <Typography sx={headingStyle} color='textSecondary' variant="h2">Audience Analysis</Typography> */}
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Personas</Typography>
            <Grid container spacing={3}>
                {personaImgs.map((img, i) => (
                    <Grid key={i} item xs={12} md={6}>
                        <img src={`/images/goodreads/${img}.png`} alt={img} style={imgStyle} />
                    </Grid>
                ))}
            </Grid>
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Content Structure</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src={`/images/goodreads/content-structure.png`} alt='content structure chart' style={imgStyle} />
                </Grid>
            </Grid>
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Wireframes</Typography>
            <Grid container spacing={3}>
                {panels.map((img, i) => (
                    <Grid item key={i} xs={6} sm={3} md={2}>
                        <img src={`/images/goodreads/wireframes/${img}.png`} alt={img} style={imgStyle} />
                    </Grid>
                ))}
            </Grid>
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Style Guide</Typography>
            <img src='/images/goodreads/style-guide.png' alt='Goodreads style guide' style={{ width: '100%', height: 'auto', borderRadius: '0.8rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)' }} />
            <Typography sx={headingStyle} color='textSecondary' variant="h2">Mockups</Typography>
            <Grid container spacing={3}>
                {panels.map((img, i) => (
                    <Grid item key={i} xs={12} sm={4} md={3}>
                        <img src={`/images/goodreads/mockups/${img}.png`} alt={img} style={imgStyle} />
                    </Grid>
                ))}
            </Grid>
            {/* <Typography sx={headingStyle} color='textSecondary' variant="h2">Pitch</Typography> */}
        </React.Fragment>
    )
}

export { ProjectPage };