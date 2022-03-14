import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { ArrowButton } from 'components';

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

    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Typography variant='h1' color='textPrimary' textAlign='center' sx={{ p: 2 }}>Graphic Design</Typography>
            <ArrowButton direction="back" />
            {scrollPosition > window.innerHeight * .75 ? <ArrowButton direction='up' /> : null}
        </Box>
    )
};

export { GraphicsPage };