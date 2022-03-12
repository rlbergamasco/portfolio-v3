import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <Box sx={{ p: 5 }}>
            <AboutSection />
        </Box>
    )
};

const AboutSection = () => {
    return (
        <Box sx={{ maxWidth: '660px' }}>
            <Typography color="textPrimary" variant="h1">About Me</Typography>
            <Typography color="textPrimary">
                {"My name is Riley Bergamasco. I'm a junior in the Hussman School of Journalism and Media at the University of North Carolina at Chapel Hill double majoring in Media and Journalism (Interactive Media Concentration) & Computer Science with a minor in Cognitive Science."}
            </Typography>
            <Typography color="textPrimary">
                I have experience with UI/UX design, web and mobile app development, AR development, and more. I also have experience designing logos, branding, magazine layouts, illustrations, infographics, websites, and motion graphics.
            </Typography>
            <Typography color="textPrimary">
                Learn more about my experience, skills, and interests by downloading my resume, connecting with me on LinkedIn, or checking out my Github.            </Typography>
            <Typography color="textPrimary">
                I designed and developed this website and all of its content. This website was built using React.            </Typography>
        </Box>
    )
}

export { HomePage };