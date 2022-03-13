import { Typography, Link } from '@mui/material';
import { ArrowButton } from 'components';

const GraphicsPage = () => {
    return (
        <>
            <Typography>Graphics</Typography>
            <Link href="/">
                <ArrowButton direction="back" />
            </Link>
        </>
    )
};

export { GraphicsPage };