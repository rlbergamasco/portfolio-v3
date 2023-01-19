import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import '../styles.css'

const ProjectCard = ({ title, category, image, path, smallText }) => {
    return (
        <a href={path}>
            <Box sx={{ position: 'relative', height: '100%' }} className='projectCard'>
                <img width='100%' height='100%' alt={title} src={image} />
                <Box className='overlay'>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)'
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        marginTop: '-0.5em'
                    }}>
                        <Typography variant={smallText ? 'h4' : 'h2'} align='center' color='textPrimary'>{title}</Typography>
                        <Typography variant={smallText ? 'body1' : 'h5'} align='center' color='textPrimary' sx={{ mt: 1 }}>{category}</Typography>
                    </Box>
                </Box>
            </Box>
        </a>
    );
};

export { ProjectCard };

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    smallText: PropTypes.bool
};

ProjectCard.defaultProps = {
    smallText: false
}