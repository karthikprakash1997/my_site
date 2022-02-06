import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { WORD_EXPERIENCE_AND_EDUCATION_TIMELINE, EXPERIENCE_DETAILS } from "../../util";
import Heading from "../../components/heading";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import DetailModal from "../../components/modal";

const Education = ({ myref }) => {

    const [modal, setModal] = useState(false);
    const handleModal = (value = false) => {
        setModal(value)
    }
    return (
        <>
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
                                <Box
                                    sx={{
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        fontStyle: 'italic',
                                        fontSize: 22,
                                        textDecorationLine: 'underline'
                                    }}
                                    onClick={() => handleModal(it.value)}>
                                    {it.title}
                                </Box>
                            </Box>
                        </VerticalTimelineElement>

                    ))}
                </VerticalTimeline>
            </Grid>
            {modal && EXPERIENCE_DETAILS[modal] &&
                <DetailModal
                    open={modal && EXPERIENCE_DETAILS[modal] ? true : false}
                    handleClose={() => handleModal()}
                    data={EXPERIENCE_DETAILS[modal]}
                />
            }

        </>
    )
}
export default Education;