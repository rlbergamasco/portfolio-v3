import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { TriangleBackground, ArrowButton, Footer, SocialButtons, NameAnimation, ProjectCard, OvalButton } from 'components';
import { about, projects } from 'constants';

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

    const triangleSpace = aboutHeight + 300 - (window.innerWidth * .74);
    const triangleHeight = triangleSpace > 0 ? window.innerWidth * .37 : (aboutHeight + 400) / 2;
    const aboutBackgroundHeight = triangleSpace < 0 ? triangleHeight * 2 : triangleSpace + (triangleHeight * 2);
    const aboutTop = ((aboutBackgroundHeight - aboutHeight) / 2) + window.innerHeight;

    return (
        <React.Fragment>
            <TriangleBackground height={triangleHeight} width="100vw" />
            <Box sx={{ height: triangleSpace, width: '100vw', backgroundColor: '#F5F5F5' }} />
            <TriangleBackground height={triangleHeight} width="100vw" flip />
            <Box ref={ref} sx={{ p: 5, ml: window.innerWidth < 800 ? 0 : `${window.innerWidth * .04}px`, maxWidth: '700px', zIndex: 10, position: 'absolute', top: aboutTop }}>
                <Typography color="textSecondary" variant="h1">About Me</Typography>
                {about.map((p, i) => (
                    <Typography key={i} color="textSecondary" sx={{ pt: 3 }}>{p}</Typography>
                ))}
                <Box sx={{ mt: 4, mb: 1, display: 'flex', flexWrap: 'wrap' }}>
                    <OvalButton href='/resume.pdf' isDownload>Download Resume</OvalButton>
                    <SocialButtons />
                </Box>
            </Box>
        </React.Fragment>
    );
};

const FeaturedWork = () => {
    return (
        <Box sx={window.innerWidth > 680 ? { maxWidth: '1300px', mx: 'auto', mt: -7, p: 3, pt: 0 } : { maxWidth: '1300px', mx: 'auto', mt: 4, p: 3, pt: 0 }}>
            <Typography sx={{ p: 2, pt: 0 }} variant='h1' color='textPrimary' textAlign="center">Featured Work</Typography>
            <Grid container>
                {projects.map(({ title, image, category, path }, i) => (
                    <Grid item key={i} xs={12} md={6} sx={{ p: 2 }}>
                        <ProjectCard title={title} category={category} image={image} path={path} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export { HomePage };