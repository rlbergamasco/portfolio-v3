import React from 'react';
import { IconButton, Avatar, Link } from '@mui/material';
import { ArrowBack, ArrowDownward, ArrowUpward } from '@mui/icons-material';
import PropTypes from 'prop-types';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

function scrollNext() {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
}

const ArrowButton = ({ direction }) => {
    return (
        <React.Fragment>
            {direction === 'back' ?
                <Link href="/"
                    sx={{
                        position: 'absolute',
                        top: '2rem',
                        left: '2rem'
                    }}>
                    <ArrowCircle direction={direction} />
                </Link>
                : direction === 'down' ?
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '70vh',
                            left: 0,
                            right: 0,
                            margin: 'auto'
                        }}
                        onClick={scrollNext}>
                        <ArrowCircle direction={direction} />
                    </IconButton>
                    :
                    <IconButton
                        sx={{
                            margin: 0,
                            top: 'auto',
                            right: 20,
                            bottom: 20,
                            left: 'auto',
                            position: 'fixed',
                            ':hover': {
                                background: 'none'
                            }
                        }} onClick={scrollToTop} >
                        <ArrowCircle direction={direction} />
                    </IconButton>
            }
        </React.Fragment >
    );
};

const ArrowCircle = ({ direction }) => {
    return (
        <Avatar
            sx={{
                backgroundColor: '#F5F5F5',
                color: '#1C1C1C',

                border: '2px solid #F5F5F5',

                ":hover": {
                    backgroundColor: '#1C1C1C',
                    color: '#F5F5F5',
                },
            }}>
            {direction === 'back' ? <ArrowBack />
                : direction === 'down' ? <ArrowDownward />
                    : <ArrowUpward />
            }
        </Avatar>
    );
};

export { ArrowButton };

ArrowButton.propTypes = {
    direction: PropTypes.oneOf(['back', 'down', 'up']).isRequired,
};