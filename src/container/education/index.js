import React from "react";
// import { makeStyles } from "@mui/styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WrapperSection from "../../components/section";
// import SchoolIcon from '@mui/icons-material/School';
import { WORD_EXPERIENCE_AND_EDUCATION_TIMELINE } from "../../util";
import Heading from "../../components/heading";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Education = () => {

    // const useStyles = makeStyles({
    //     sectionEducation: {
    //         width: '100%',
    //         height: '100vh',
    //         display: 'flex',
    //         alignItems: 'center',
    //         // backgroundColor: '#031B34',
    //         paddingTop: 100,
    //     },
    // })

    // const classes = useStyles();
    return (
        <Grid container marginTop={'150px'}>
            {/* // <WrapperSection classVariant={`${classes.sectionEducation} education-exp`}> */}
            <Heading heading={"My Journey"} />
            <VerticalTimeline>
                {WORD_EXPERIENCE_AND_EDUCATION_TIMELINE.map((it) => (
                    <VerticalTimelineElement
                        className={it.variant}
                        contentStyle={it.contentStyle}
                        contentArrowStyle={it.contentArrowStyle}
                        date={it.date}
                        iconStyle={it.iconStyle}
                        icon={it.icon}
                    >
                        <Box display='flex' alignItems='center' columnGap='12px'>
                            <img src={require('../../assets/images/axim.jpeg')} alt='company_logo' heigth='40' width='40' />
                            <Typography variant='h4' >{it.title}</Typography>
                            {/* <h3 className="vertical-timeline-element-title">{it.title}</h3> */}
                        </Box>
                        {it.location ?
                            <Typography variant='h4' >{it.location} </Typography>
                            : null}
                        {
                            it.description.length > 0 ? <p>
                                {it.description}
                            </p> : null
                        }

                    </VerticalTimelineElement>

                ))}
            </VerticalTimeline>
        </Grid>
    )
}
export default Education;