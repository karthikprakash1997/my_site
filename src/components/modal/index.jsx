import React from "react";
import { Box, Typography, Modal } from '@mui/material';
import { makeStyles } from "@mui/styles";

const DetailModal = ({ open, handleClose, isPink = false, data }) => {

    const useStyles = makeStyles({
        projects: {
            display: 'flex',
            alignItems: 'center',
            gap: 66,
            margin: '0 auto',
            borderRadius: '1.5rem',
            // height:'75%'
        },
        proImg: {
            width: 121,
            height: 121,
            borderRadius: '100%'
        },
        linearText: {
            background: "-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        pinkBackGround: {
            // background: 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
            background: '#FE6B8B'
        },
        whiteBackGround: {
            background: 'rgb(238, 238, 238)',
        }
    })

    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80%',
                // height: '100%',
                margin: 'auto',
                // overflow: 'scroll'
            }}
            disableAutoFocus
        >
            <Box className={`project-hldr ${classes.projects} ${isPink ? classes.pinkBackGround : classes.whiteBackGround}`} paddingX={'30px'} paddingY={'30px'}>
                <img className={`${classes.proImg}`} src={window.location.origin + '/assets/images/exp/axim.jpeg'} alt="projects" />
                <div>
                    <Box whiteSpace='nowrap'>
                        <Box display={'inline'}>Duration:</Box>
                        <Box>{data.duration}</Box>
                    </Box>
                    {data.subtitle && <Box whiteSpace='nowrap' mt='12px'>
                        <Box display={'inline'}>{data.subtitle}:</Box>
                        <Box>{data.subtitleDescription}</Box>
                    </Box>}
                </div>
                <div>
                    <Typography variant="h4">{data.title}</Typography>
                    <Typography textAlign={'justify'}>
                        {data.description}
                    </Typography>
                </div>
            </Box>
        </Modal>
    )
}
export default DetailModal;