import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { TriangleBackground, ArrowButton, DisplayCard } from 'components';

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

    const projects = [
        {
            title: "Energy Data Visualization",
            date: "October 2021",
            description: "I wrote this short article and created this data visualization for MEJO 487: Intermediate Interactive Media. The project was designed to match the New York Times style.",
            image: "/energy.png",
            url: "https://rileybergamasco.com/mejo487/energy-data/"
        },
        {
            title: "XR Educational Website",
            date: "October 2021",
            description: "This educational website teaches about the three mediums of extended reality -- augmented reality, virtual reality, and mixed reality. I created this project for MEJO 487: Intermediate Interactive Media.",
            image: "/xr.png",
            url: "https://rileybergamasco.com/mejo487/xr-slides/"
        },
        {
            title: "React Playground",
            date: "September 2021",
            description: "A game in which you click different buttons to change and reveal components in order to color in all the dots. I created this game as a personal project to explore the capabilities of React and Material UI and demonstate some of the skills I learned during my intership at illumis.",
            image: "/playground.png",
            url: "http://rileybergamasco.com/web-dev/react-playground/"
        },
        {
            title: "Graphic Design Projects",
            date: "Febuary 2020 - December 2022",
            description: "Graphic design projects including logo design, magazine layout, poster design, infographics, illustrations, and motion graphics.",
            image: "/name.svg",
            url: "/graphics"
        },
    ]

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
            <Box sx={{ maxWidth: '1200px', m: 'auto', p: 3 }}>
                <Typography variant='h1' color='textPrimary' textAlign="right">Featured Work</Typography>
                {projects.map(({ title, date, description, image, url }, i) => (
                    <DisplayCard key={i} title={title} date={date} description={description} image={image} url={url} reverse={i % 2 === 0} />
                ))}
            </Box>
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