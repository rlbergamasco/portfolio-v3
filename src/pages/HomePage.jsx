import React from 'react';
import { Box, Typography } from '@mui/material';
import { TriangleBackground, ArrowButton } from 'components';

const HomePage = () => {
    return (
        <React.Fragment>
            <ArrowButton direction='down' />
            <Box sx={{ height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 6 }}>
                    <img style={{ width: '90%' }} src="/name_vector.svg" />
                </Box>
            </Box>
            <About />
            <ArrowButton direction='up' />
        </React.Fragment>
    );
};

const About = () => {
    return (
        <React.Fragment>
            <TriangleBackground height="37vw" width="100vw" />
            <Box sx={{ height: 'calc(1000px - 74vw)', width: '100vw', backgroundColor: '#F5F5F5' }} />
            <TriangleBackground height="37vw" width="100vw" flip />
            <Box sx={{ p: 5, maxWidth: '700px', zIndex: 10, position: 'absolute', m: 5, top: '95vh' }}>
                <Typography color="textSecondary" variant="h1">About Me</Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    {"My name is Riley Bergamasco. I'm a junior in the Hussman School of Journalism and Media at the University of North Carolina at Chapel Hill double majoring in Media and Journalism (Interactive Media Concentration) & Computer Science with a minor in Cognitive Science."}
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    I have experience with UI/UX design, web and mobile app development, AR development, and more. I also have experience designing logos, branding, magazine layouts, illustrations, infographics, websites, and motion graphics.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    Learn more about my experience, skills, and interests by downloading my resume, connecting with me on LinkedIn, or checking out my Github.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    I designed and developed this website and all of its content. This website was built using React.
                </Typography>
            </Box>
        </React.Fragment>
    );
};

export { HomePage };