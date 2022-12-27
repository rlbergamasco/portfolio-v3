import { Box, Typography } from '@mui/material';
import { TriangleBackground, SocialButtons } from 'components';

const Footer = ({ isDiagonal }) => {
    if (isDiagonal) {
        return (
            <Box sx={{ backgroundColor: '#f5f5f5', pb: 2 }}>
                <TriangleBackground height="180px" width="100vw" />
                <Box sx={{ mt: -5 }}>
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