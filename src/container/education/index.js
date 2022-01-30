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

const Education = ({ myref }) => {
    return (
        <Grid ref={myref} container marginTop={'150px'}>
            <Heading heading={"My Journey"} />
            <VerticalTimeline>
                {WORD_EXPERIENCE_AND_EDUCATION_TIMELINE.map((it, index) => (
                    <VerticalTimelineElement
                        key={index}
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