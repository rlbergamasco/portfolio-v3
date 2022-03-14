import React from 'react';
import { Avatar, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialButtons = () => {
    const socials = [
        {
            icon: faLinkedinIn,
            url: "https://www.linkedin.com/in/rileybergamasco/",
            size: "1x"
        },
        {
            icon: faGithub,
            url: "https://github.com/rlbergamasco",
            size: 'lg'
        }
    ];

    return (
        <React.Fragment>
            {socials.map(({ icon, url, size }, i) => (
                <Link target="_blank" href={url} key={i}>
                    <Avatar
                        sx={{
                            backgroundColor: '#F5F5F5',
                            border: '2px solid #1C1C1C',
                            color: '#1C1C1C',
                            ml: 1,
                            ":hover": {
                                backgroundColor: '#1C1C1C',
                                color: '#F5F5F5',
                            },
                        }}>
                        <FontAwesomeIcon icon={icon} size={size} />
                    </Avatar>
                </Link>
            ))}
        </React.Fragment >
    );
};

export { SocialButtons };