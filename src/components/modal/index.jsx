import React from "react";
import { Box, Typography, Modal, Chip } from '@mui/material';
import { makeStyles } from "@mui/styles";

const DetailModal = ({ open, handleClose, data }) => {

    const useStyles = makeStyles({
        projects: {
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            margin: '0 auto',
            borderRadius: '1.5rem',
            maxHeight: '75%',
            overflowY: 'auto'
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
            background: '#FE6B8B',
            color: 'white'
        },
        whiteBackGround: {
            background: 'rgb(238, 238, 238)',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            margin: 'auto',
        }
    })

    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus
            className={`${classes.modal}`}
            key={data.title}
        >
            <Box className={`project-hldr ${classes.projects} ${data?.isPink ? classes.pinkBackGround : classes.whiteBackGround}`} paddingX={'30px'} paddingY={'30px'}>
                <img className={`${classes.proImg}`} src={window.location.origin + `/assets/images/exp/${data?.image}`} alt="projects" />
                <div>
                    <Box whiteSpace='nowrap'>
                        <Box display={'inline'}>Duration:</Box>
                        <Box>{data?.duration}</Box>
                    </Box>
                    <Box whiteSpace='nowrap' mt='12px'>
                        {data?.subtitle && <Box display={'inline'}>{data?.subtitle}:</Box>}
                        {data?.subtitleDescription && <Box>{data?.subtitleDescription}</Box>}
                    </Box>
                    <Box whiteSpace='nowrap' mt='12px'>
                        {data?.secondarySubtitle && <Box display={'inline'}>{data?.secondarySubtitle}:</Box>}
                        {data?.secondarySubtitleText && <Box>{data?.secondarySubtitleText}</Box>}
                    </Box>
                </div>
                <Box >
                    <Typography variant="h4">{data?.title}</Typography>
                    <Box marginLeft={data?.isPara ? '0px' : '25px'}>
                        {!data?.isPara ?
                            <ul>
                                {data?.description?.map((it, ind) => (
                                    <li key={ind}>
                                        <Typography textAlign={'justify'}>
                                            {it}
                                        </Typography>

                                    </li>))}
                            </ul>
                            :
                            <>
                                {data?.description?.map((it, ind) => (
                                    <Typography key={ind} textAlign={'justify'} style={{ textIndent: '10%' }} paragraph>
                                        {it}
                                    </Typography>))}
                            </>
                        }
                    </Box>
                    {data?.projects?.length > 0 && <Box>{
                        data?.projects.map((it, ind) => (
                            <>
                                <Typography key={ind} variant="h6">{it.title}</Typography>
                                <Box marginLeft={'25px'}>
                                    <ul>
                                        {it.description.map((datum, ind) => (
                                            <li key={ind}>
                                                <Typography textAlign={'justify'}>
                                                    {datum}
                                                </Typography>

                                            </li>))}
                                    </ul>
                                </Box>
                            </>
                        ))}
                    </Box>}
                    {data?.chipText?.length && <Box whiteSpace='nowrap' mt='12px'>
                        <Box display={'inline'}>{data?.chipTitle}: </Box>
                        <Box display='flex' style={{ flexWrap: 'wrap' }} gap='10px' marginTop='5px'>
                            {data?.chipText.map((it,ind) => (
                                <Chip key={ind} label={it} className={`${!data?.isPink ? classes.pinkBackGround : classes.whiteBackGround}`} />
                            ))}
                        </Box>
                    </Box>}
                </Box>
            </Box>
        </Modal>
    )
}
export default DetailModal;