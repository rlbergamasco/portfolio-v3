import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import { ArrowBack, ArrowDownward, ArrowUpward } from '@mui/icons-material';
import PropTypes from 'prop-types';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    // FIGURE OUT WHY its not scrolling to the top of the page after adding down button
};

const scrollNext = () => {
    window.scrollTo({
        top: window.innerHeight * .95,
        left: 0,
        behavior: 'smooth'
    });
};

const backToHome = () => {
    console.log("back")
};

const ArrowButton = ({ direction }) => {
    return (
        <IconButton
            onClick={direction == 'back' ? backToHome
                : direction == 'down' ? scrollNext : scrollToTop}>
            <Avatar
                sx={{
                    backgroundColor: '#1C1C1C',
                    border: `1px solid #F5F5F5`,
                    color: '#F5F5F5',
                    ":hover": {
                        backgroundColor: '#F5F5F5',
                        border: `0`,
                        color: '#1C1C1C',
                    },
                }}>
                {direction == 'back' ? <ArrowBack />
                    : direction == 'down' ? <ArrowDownward />
                        : <ArrowUpward />
                }
            </Avatar>
        </IconButton>
    );
};

export { ArrowButton };

ArrowButton.propTypes = {
    direction: PropTypes.oneOf(['back', 'down', 'up']).isRequired,
};