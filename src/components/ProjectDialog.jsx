import { Box, Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const ProjectDialog = ({ fullImgs, handleClose, open, title }) => {
    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                <CloseButton onClick={handleClose} />
            </Box>
            <Box sx={{ backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {fullImgs.map((url, i) => (
                    <Box sx={{ m: 2 }} key={i}>
                        {title === "Morphing Motion Graphic" ?
                            <video autoPlay loop controls style={{ objectFit: 'contain', maxHeight: '87vh', maxWidth: '100%', height: '100%', width: 'auto' }}>
                                <source src={`/images${url}`} type="video/mp4" />
                            </video>
                            :
                            <img src={`/images${url}`} alt={title} style={{ objectFit: 'contain', maxHeight: '87vh', maxWidth: '100%', height: '100%', width: 'auto' }} />

                        }
                    </Box>
                ))
                }
            </Box>
        </Dialog>
    );
};

const CloseButton = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <Close />
        </IconButton>
    )
};

export { ProjectDialog };