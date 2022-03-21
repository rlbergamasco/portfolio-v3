import { useEffect } from 'react';
import { Box } from '@mui/material';
import anime from 'animejs';

const NameAnimation = () => {
    const animateName = () => {
        anime({
            targets: '.st0',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1800,
            delay: 500
        });
    };

    const animateDot = () => {
        anime({
            targets: '.st1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            duration: 100,
            delay: 2500
        });
    };

    const animateLastName = () => {
        anime({
            targets: '.st2',
            opacity: [0, 1],
            easing: 'linear',
            duration: 1,
            delay: function (_, i) {
                return 2700 + i * 80;
            }
        });
    };

    useEffect(() => {
        animateName();
        animateDot();
        animateLastName();
    }, []);

    return (
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 6 }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 692 503.8" >
                    <path className="st0" style={{ fill: 'none', stroke: 'white', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                        d="M37.9,178.2c0,0,83,4,146-75c0,0,5.2,74.9-42,195c-46,117-72,100-54-6s88.1-228.6,163-266c74-37,67,52-57,207
                        c0,0,27-26,27,16c0,41,21,59,58,5c0.5-2.2,12,62.9,51,16c41.9-50.5,52-115,36-128s-54,44-41,110s87.5,36.5,89-20
                        c1-39-48.1,38.3-18,55c9,5,34,3,48-15c9.5-12.2,6.7-24.7,3-21c-7,7-6,31,24,12s43-40,41-26c-2,14,5,99-22,169c-27,70-58,96-64,59
                        s20.9-132.2,140-207c43-27,73-32,88-32c21,0,28.4,11.8,24,18"/>
                    <path className="st1" style={{ fill: 'none', stroke: 'white', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}
                        d="M284.4,219.7c-2,2-3,4,1,3" />
                    <path className="st2" style={{ fill: '#ffffff' }} d="M178.5,329.5c0,5.4-3.9,8.5-11.3,8.5h-14.3v-31.5h13.5c6.9,0,10.6,3.2,10.6,8.2c0,3.2-1.5,5.6-3.7,6.9
                        C176.4,322.7,178.5,325.4,178.5,329.5z M158.2,311.1v8.7h7.6c3.7,0,5.8-1.4,5.8-4.3c0-2.9-2.1-4.4-5.8-4.4H158.2z M173.1,328.9
                        c0-3.1-2.2-4.5-6.2-4.5h-8.6v9.1h8.6C170.9,333.4,173.1,332,173.1,328.9z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M205.8,333.1v4.9h-21.6v-31.5h21v4.9h-15.7v8.2h13.9v4.8h-13.9v8.7H205.8z" />
                    <path className="st2" style={{ fill: '#ffffff' }} d="M230.6,338l-5.9-9.2c-0.4,0-0.7,0-1.1,0h-6.5v9.2h-5.4v-31.5h11.9c7.6,0,12.3,4.2,12.3,11.2
                        c0,4.8-2.2,8.3-6.1,9.9l6.6,10.3H230.6z M223.4,311.5h-6.3V324h6.3c4.7,0,7.1-2.3,7.1-6.3S228.1,311.5,223.4,311.5z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M261.5,321.9h5.1v12.6c-3,2.7-7.2,4-11.3,4c-8.9,0-15.5-6.8-15.5-16.2c0-9.4,6.6-16.2,15.6-16.2
                        c4.8,0,8.8,1.8,11.6,5.1l-3.4,3.6c-2.3-2.5-4.9-3.6-7.9-3.6c-6.1,0-10.5,4.5-10.5,11.1c0,6.4,4.3,11.1,10.4,11.1
                        c2.1,0,4.1-0.5,5.9-1.6V321.9z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M292.3,330.7h-14.4l-2.8,7.3h-5.5l13-31.5h5.3l13,31.5h-5.6L292.3,330.7z M290.5,326.1l-5.4-13.8l-5.4,13.8
                        H290.5z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M330.9,338l0-20.9l-9.5,17.3H319l-9.5-17V338h-5.1v-31.5h4.4l11.4,20.9l11.2-20.9h4.4l0,31.5H330.9z" />
                    <path className="st2" style={{ fill: '#ffffff' }} d="M362.4,330.7H348l-2.8,7.3h-5.5l13-31.5h5.3l13,31.5h-5.6L362.4,330.7z M360.7,326.1l-5.4-13.8l-5.4,13.8H360.7
                        z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M372.2,334.7l1.9-4.5c2.3,2,6,3.5,9.5,3.5c4.5,0,6.4-1.8,6.4-4.1c0-6.8-17.1-2.3-17.1-14
                        c0-5.1,3.7-9.4,11.6-9.4c3.5,0,7.1,1,9.6,2.8l-1.7,4.5c-2.6-1.7-5.4-2.5-7.9-2.5c-4.4,0-6.3,1.9-6.3,4.3c0,6.7,17.1,2.3,17.1,13.9
                        c0,5-3.7,9.4-11.6,9.4C379,338.5,374.5,336.9,372.2,334.7z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M398.4,322.3c0-9.4,6.6-16.2,15.4-16.2c4.7,0,8.7,1.8,11.4,5.3l-3.5,3.6c-2.1-2.5-4.7-3.7-7.7-3.7
                        c-6,0-10.3,4.6-10.3,11.1c0,6.5,4.3,11.1,10.3,11.1c3,0,5.6-1.2,7.7-3.7l3.5,3.6c-2.7,3.4-6.7,5.3-11.4,5.3
                        C405,338.5,398.4,331.7,398.4,322.3z"/>
                    <path className="st2" style={{ fill: '#ffffff' }} d="M427.7,322.3c0-9.3,6.6-16.2,15.5-16.2c8.9,0,15.5,6.8,15.5,16.2c0,9.4-6.6,16.2-15.5,16.2
                        C434.3,338.5,427.7,331.6,427.7,322.3z M453.4,322.3c0-6.4-4.3-11.1-10.1-11.1s-10.1,4.6-10.1,11.1c0,6.4,4.3,11.1,10.1,11.1
                        S453.4,328.7,453.4,322.3z"/>
                </svg>
            </Box>
        </Box>
    );
};

export { NameAnimation };