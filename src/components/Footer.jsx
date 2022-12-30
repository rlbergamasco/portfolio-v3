import { Box, Typography } from '@mui/material';
import { TriangleBackground, SocialButtons, OvalButton } from 'components';

const Footer = ({ isDiagonal }) => {
    if (isDiagonal) {
        return (
            <Box sx={{ backgroundColor: '#f5f5f5', pb: 3 }}>
                <TriangleBackground height={window.innerWidth * .15} width="100vw" />
                <Box sx={window.innerWidth > 800 ? window.innerWidth > 1100 ? { mt: -7 } : { mt: -5 } : { mt: 0 }} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}><SocialButtons /></Box>
                    <Typography color="textSecondary" textAlign="center" variant="body2">&copy; 2022 Riley Bergamasco</Typography>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box sx={{ backgroundColor: '#f5f5f5', pb: 3, pt: 5 }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 1 }}><SocialButtons /></Box>
                    <Typography color="textSecondary" textAlign="center" variant="body2">&copy; 2022 Riley Bergamasco</Typography>
                </Box>
            </Box>
        );
    }
};

Footer.defaultProps = {
    isDiagonal: false,
};

export { Footer };