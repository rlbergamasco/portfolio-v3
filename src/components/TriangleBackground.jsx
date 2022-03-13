import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const TriangleBackground = ({ height, width, flip }) => {
    return (
        <Box sx={{
            height: height, width: width,
            background: flip ? `linear-gradient(to top left, #1C1C1C 0%, #1C1C1C 50%, #F5F5F5 50%, #F5F5F5 100%)`
                : `linear-gradient(to bottom left, #1C1C1C 0%, #1C1C1C 50%, #F5F5F5 50%, #F5F5F5 100%)`
        }} />
    );
};

export { TriangleBackground };

TriangleBackground.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    flip: PropTypes.bool,
};

TriangleBackground.defaultProps = {
    flip: false,
};