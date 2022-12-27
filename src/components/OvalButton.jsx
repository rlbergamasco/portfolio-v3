import React from 'react';
import { Fab } from '@mui/material';

const OvalButton = ({ children, href, isDownload }) => {
    return (
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
            href={href}
            target='_blank'
            download={isDownload ? "rileybergamasco_resume" : ''}
        >
            {children}
        </Fab>
    )
};

OvalButton.defaultProps = {
    isDownload: false,
};

export { OvalButton };