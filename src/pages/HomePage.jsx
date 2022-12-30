import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { TriangleBackground, ArrowButton, Footer, SocialButtons, NameAnimation, ProjectCard, OvalButton } from 'components';
import { about, projects } from 'utils/constants';

const HomePage = () => {
    // scroll position for return to top button
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showDownButton, setShowDownButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDownButton(true);
        }, 3300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <React.Fragment>
            {scrollPosition > window.innerHeight * .5 ? <ArrowButton direction='up' /> : null}
            {showDownButton ? <ArrowButton direction='down' /> : null}
            <NameAnimation />
            <About />
            <FeaturedWork />
            <Footer isDiagonal />
        </React.Fragment>
    );
};

const About = () => {
    const [aboutHeight, setAboutHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        setAboutHeight(ref.current.clientHeight);
    }, []);

    const triangleSpace = aboutHeight + 300 - (window.innerWidth * .30);
    const triangleHeight = triangleSpace > 0 ? window.innerWidth * .15 : (aboutHeight + 400) / 2;
    const aboutBackgroundHeight = triangleSpace < 0 ? triangleHeight * 2 : triangleSpace + (triangleHeight * 2);
    const aboutTop = ((aboutBackgroundHeight - aboutHeight) / 2) + window.innerHeight;

    return (
        <Box id='about'>
            <TriangleBackground height={triangleHeight} width="100vw" />
            <Box sx={{ height: triangleSpace, width: '100vw', backgroundColor: '#F5F5F5' }} />
            <TriangleBackground height={triangleHeight} width="100vw" flip />
            <Box sx={{ maxWidth: '1300px', mx: 'auto' }}>
                <Box ref={ref} sx={{ pl: 3, maxWidth: '800px', zIndex: 10, position: 'absolute', top: aboutTop }}>
                    <Typography color="textSecondary" variant="h1">About Me</Typography>
                    {about.map((p, i) => (
                        <Typography key={i} color="textSecondary" sx={{ pt: 3 }}>{p}</Typography>
                    ))}
                    <Box sx={{ mt: 4, mb: 1, display: 'flex', flexWrap: 'wrap' }}>
                        <OvalButton href='/resume.pdf' isDownload>Download Resume</OvalButton>
                        <SocialButtons />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const FeaturedWork = () => {
    return (
        <Box id='work'
            sx={{ maxWidth: '1300px', mx: 'auto', mb: window.innerWidth >= 900 ? -5 : 0, mt: 2, p: 3, pt: 0 }}>
            {/* <Grid container>
                {projects.map(({ title, image, category, path }, i) => (
                    <Grid item key={i} xs={12} md={6} sx={{ p: 2 }}>
                        <ProjectCard title={title} category={category} image={image} path={path} />
                    </Grid>
                ))}
            </Grid> */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Grid container direction='column' spacing={3}>
                        <Grid item sx={{ position: 'relative', height: '100%' }}>
                            <Typography sx={window.innerWidth >= 900 ? { pt: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)' } : { pt: 6, pb: 2 }} variant='h1' color='textPrimary'>Featured Work</Typography>
                            <img width='100%' height='100%' alt='spacer' src={'/images/spacer.png'} style={{ opacity: 0, display: window.innerWidth >= 900 ? 'block' : 'none' }} />
                        </Grid>
                        {projects.filter((_, i) => i < projects.length / 2 - 1).map(({ title, image, category, path }, i) => (
                            <Grid item key={i}>
                                <ProjectCard title={title} category={category} image={image} path={path} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container direction='column' spacing={3}>
                        {projects.filter((_, i) => i >= projects.length / 2 - 1).map(({ title, image, category, path }, i) => (
                            <Grid item key={i}>
                                <ProjectCard title={title} category={category} image={image} path={path} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export { HomePage };