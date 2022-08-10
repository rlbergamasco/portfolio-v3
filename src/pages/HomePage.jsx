import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import { TriangleBackground, ArrowButton, DisplayCard, SocialButtons, NameAnimation } from 'components';

console.log("FIX ISSUES WITH REACT PLAYGROUND RESET");

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
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    {"My name is Riley Bergamasco. I am a senior at the University of North Carolina at Chapel Hill double majoring in Computer Science and Journalism with a concentration in Interactive Media & Design. My goal is to bridge the gap between design and coding to create unique, usable experiences."}
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    My experiences include front-end and full-stack web development, front-end mobile development, UI/UX design, and graphic design including designing logos, branding, magazine layouts, illustrations, infographics, and motion graphics. I plan to pursue a career as a UX engineer, front-end developer, design technologist, or similar role.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    Learn more about my experience, skills, and interests by downloading my resume, connecting with me on LinkedIn, or checking out my GitHub. I will be available for full-time opportunities starting in summer 2023.
                </Typography>
                <Typography color="textSecondary" sx={{ pt: 3 }}>
                    I designed and developed this website and all of its content. This website was created using React.
                </Typography>
                <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap' }}>
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
            title: "Select Graphic Design Projects",
            date: "Febuary 2020 - December 2021",
            description: "Logo design, magazine layout, poster design, illustration, and motion graphic projects.",
            image: "/graphic-design.png",
            url: "/graphics",
            tools: ["illustrator", "photoshop", "indesign", "aftereffects", "premierepro"]
        },
    ];

    return (
        <Box sx={window.innerWidth > 680 ? { maxWidth: '1140px', mx: 'auto', mt: -7, p: 3, pt: 0 } : { maxWidth: '1140px', mx: 'auto', mt: 4, p: 3, pt: 0 }}>
            <Typography sx={{ p: 2, pt: 0 }} variant='h1' color='textPrimary' textAlign="right">Featured Work</Typography>
            {projects.map(({ title, date, description, image, url, tools }, i) => (
                <DisplayCard key={i} title={title} date={date} description={description} image={`/images${image}`} url={url} tools={tools} reverse={i % 2 === 0} />
            ))}
        </Box>
    );
};

export { HomePage };