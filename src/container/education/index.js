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
                {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement> */}
            </VerticalTimeline>
            {/* // </WrapperSection> */}
        </Grid>
    )
}
export default Education;