import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { ArrowButton, DisplayCard } from 'components';

const GraphicsPage = () => {
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
            title: "Morphing Motion Graphic",
            date: "December 2021",
            description: "I created this motion graphic to explore morphing simple shapes in Adobe After Effects. This project was created for MEJO 589: Motion Graphics.",
            image: "/energy.png",
            fullImgs: ["/logo-full.jpeg"],
            tools: ["aftereffects", "premierepro"]
        },
        {
            title: "Editorial Illustration",
            date: "February 2021",
            description: "Editorial illustration for a fictional story about a Top Secret project the United States government recently launched that integrates all of its military intelligence-gathering efforts into a state-of-the-art computer system. This project was created for MEJO 482: Media Design.",
            image: "/illustration-cover.jpeg",
            fullImgs: ["/logo-full.jpeg"],
            tools: ["illustrator"]
        },
        {
            title: "Album Redesign",
            date: "January 2021",
            description: "I redesigned Miley Cyrus' \"Plastic Hearts\" album and adapted the album design into a promotional poster for MEJO 482: Media Design. The goal of the project was to create a design that fits the style of Blue Note Records while remaining connected to the artist's personal style.",
            image: "/album-cover.jpeg",
            fullImgs: ["/album-full-1.jpeg", "/album-full-2.jpeg"],
            tools: ["illustrator", "photoshop"]
        },
        {
            title: "No Time To Die Magazine Layout",
            date: "April 2020",
            description: "Six-page magazine spread design emulating the styles of Vanity Fair and Esquire. This project was created for MEJO 182: Foundations of Graphic Design.",
            image: "/magazine-cover.jpeg",
            fullImgs: ["/magazine-full-1.jpeg", "/magazine-full-2.jpeg", "/magazine-full-3.jpeg"],
            tools: ["indesign"]
        },
        {
            title: "Personal Branding Design",
            date: "February 2020",
            description: "Personal logo, business card, and letterhead design for MEJO 182: Foundations of Graphic Design.",
            image: "/logo-cover.jpeg",
            fullImgs: ["/logo-full.jpeg"],
            tools: ["illustrator"]
        },

    ]

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Typography variant='h1' color='textPrimary' textAlign='center' sx={{ p: 2, mb: 8 }}>Graphic Design</Typography>
            <ArrowButton direction="back" />
            {scrollPosition > window.innerHeight * .5 ? <ArrowButton direction='up' /> : null}
            <Box sx={{ maxWidth: '1140px', mx: 'auto', mt: -7, p: 3, pt: 0 }}>
                {projects.map(({ title, date, description, image, fullImgs, tools }, i) => (
                    <DisplayCard key={i} title={title} date={date} description={description} image={image} fullImgs={fullImgs} tools={tools} reverse={i % 2 === 1} />
                ))}
            </Box>
        </Box>
    )
};

export { GraphicsPage };