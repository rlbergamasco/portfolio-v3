import React, { useState, useEffect } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import { TriangleBackground, ArrowButton, DisplayCard, SocialButtons } from 'components';

console.log("FIX ISSUES WITH REACT PLAYGROUND RESET");

const HomePage = () => {
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

    return (
        <React.Fragment>
            {scrollPosition > window.innerHeight * .75 ? <ArrowButton direction='up' /> : null}
            <ArrowButton direction='down' />
            <Box sx={{ height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: '640px', display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 6 }}>
                    <img style={{ width: '90%' }} src="/name.svg" />
                </Box>
            </Box>
            <About />
            <FeaturedWork />
        </React.Fragment>
    );
};

const About = () => {
    return (
        <React.Fragment>
            <TriangleBackground height="37vw" width="100vw" />
            <Box sx={{ height: 'calc(1000px - 74vw)', width: '100vw', backgroundColor: '#F5F5F5' }} />
            <TriangleBackground height="37vw" width="100vw" flip />
            <Box sx={{ p: 5, m: 5, maxWidth: '700px', zIndex: 10, position: 'absolute', top: '95vh' }}>
                <Typography color="textSecondary" variant="h1">About Me</Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    {"My name is Riley Bergamasco. I'm a junior in the Hussman School of Journalism and Media at the University of North Carolina at Chapel Hill double majoring in Media and Journalism (Interactive Media Concentration) & Computer Science with a minor in Cognitive Science."}
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    I have experience with UI/UX design, web and mobile app development, AR development, and more. I also have experience designing logos, branding, magazine layouts, illustrations, infographics, websites, and motion graphics.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    Learn more about my experience, skills, and interests by downloading my resume, connecting with me on LinkedIn, or checking out my GitHub.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    I designed and developed this website and all of its content. This website was built using React.
                </Typography>
                <Box sx={{ my: 2, display: 'flex' }}>
                    <Fab
                        variant='extended'
                        size='medium'
                        sx={{
                            backgroundColor: '#f5f5f5',
                            textTransform: 'capitalize',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            boxShadow: 0,
                            color: '#1c1c1c',
                            border: '2px solid #1c1c1c',
                            ":hover": {
                                backgroundColor: '#1c1c1c',
                                color: '#f5f5f5',
                            },
                        }}
                        href="/resume.pdf"
                        download="rileybergamasco_resume"
                    >
                        Download Resume
                    </Fab>
                    <SocialButtons />
                </Box>
            </Box>
        </React.Fragment>
    );
};

const FeaturedWork = () => {
    const projects = [
        {
            title: "Energy Data Visualization",
            date: "October 2021",
            description: "I wrote this short article and created this data visualization for MEJO 487: Intermediate Interactive Media. The project was designed to match the New York Times style.",
            image: "/energy.png",
            url: "https://rileybergamasco.com/mejo487/energy-data/",
            tools: ["jquery", "bulma"]
        },
        {
            title: "XR Educational Website",
            date: "October 2021",
            description: "This educational website teaches about the three mediums of extended reality -- augmented reality, virtual reality, and mixed reality. I created this project for MEJO 487: Intermediate Interactive Media.",
            image: "/xr.png",
            url: "https://rileybergamasco.com/mejo487/xr-slides/",
            tools: ["react", "mui"]
        },
        {
            title: "React Playground",
            date: "September 2021",
            description: "A game in which you click different buttons to change and reveal components in order to color in all the dots. I created this game as a personal project to explore the capabilities of React and Material UI and demonstate some of the skills I learned during my intership at illumis.",
            image: "/playground.png",
            url: "https://rileybergamasco.com/web-dev/react-playground/",
            tools: ["react", "mui"]
        },
        {
            title: "Graphic Design Projects",
            date: "Febuary 2020 - December 2022",
            description: "Graphic design projects including logo design, magazine layout, poster design, infographics, illustrations, and motion graphics.",
            image: "/name.svg",
            url: "/graphics",
            tools: ["illustrator", "photoshop", "indesign", "aftereffects"]
        },
    ];

    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', mt: -7, p: 3, pt: 0 }}>
            <Typography sx={{ p: 2, pt: 0 }} variant='h1' color='textPrimary' textAlign="right">Featured Work</Typography>
            {projects.map(({ title, date, description, image, url, tools }, i) => (
                <DisplayCard key={i} title={title} date={date} description={description} image={image} url={url} tools={tools} reverse={i % 2 === 0} />
            ))}
        </Box>
    );
};

export { HomePage };