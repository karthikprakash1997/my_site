import React from "react";

import { makeStyles } from "@mui/styles";
import 'react-vertical-timeline-component/style.min.css';
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "../../components/heading";

const Projects = () => {
    const useStyles = makeStyles({
        projects: {
            display: 'flex',
            alignItems: 'center',
            gap: 66,
            margin: '0 auto',
            borderRadius: '1rem'
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
        <Grid container marginTop={'150px'}>
                <Heading heading={"My Work"} />
                {[...new Array(5)].map((_1, index) => (
                    <Box paddingBottom={'20px'}>
                        <Box className={`project-hldr ${classes.projects} ${index % 2 ? classes.pinkBackGround : classes.whiteBackGround}`} paddingX={'30px'} paddingY={'30px'}>
                            <img className={`${classes.proImg}`} src={require('../../assets/images/study.svg')} alt="projects" />
                            <div>
                                <Box whiteSpace='nowrap'>
                                    <Box display={'inline'}>Date:</Box>
                                    <Box>Dec 19 2021</Box>
                                </Box>
                                <Box whiteSpace='nowrap' mt='12px'>
                                    <Box display={'inline'}>Category:</Box>
                                    <Box>Dec 19 2021</Box>
                                </Box>
                            </div>
                            <div>
                                <Typography variant="h3">IOT</Typography>
                                <Typography textAlign={'justify'}>
                                    Duis occaecat irure labore veniam id fugiat consequat tempor amet consectetur cillum voluptate. Sint aliquip non officia veniam excepteur. Do amet et tempor sit enim.
                                    Reprehenderit reprehenderit minim velit nulla. Nostrud consequat in mollit quis cupidatat nisi. Velit fugiat nulla anim aliquip dolor laboris non amet ad esse irure consectetur. Ut nisi duis do laboris deserunt exercitation elit
                                    est laborum elit dolore adipisicing fugiat. Esse officia deserunt pariatur nulla in duis amet dolore culpa cillum esse magna.
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                ))}
            </Grid>
    )
}

export default Projects;
