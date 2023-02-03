import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  WORD_EXPERIENCE_AND_EDUCATION_TIMELINE,
  EXPERIENCE_DETAILS,
} from "../../util";
import Heading from "../../components/heading";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DetailModal from "../../components/modal";

const Education = ({ myref }) => {
  const [modal, setModal] = useState(null);
  const handleModal = (value = false) => setModal(value);

  return (
    <>
      <Grid ref={myref} container marginTop={"150px"}>
        <Heading heading={"My Journey"} />
        <VerticalTimeline>
          {WORD_EXPERIENCE_AND_EDUCATION_TIMELINE.map((it, index) => {
            const data = EXPERIENCE_DETAILS[it.value];
            return (
              <VerticalTimelineElement
                key={index}
                className={it.variant}
                contentStyle={it.contentStyle}
                contentArrowStyle={it.contentArrowStyle}
                date={it.date}
                iconStyle={it.iconStyle}
                icon={it.icon}
              >
                <>
                  <Box display="flex" alignItems="center" columnGap="12px">
                    <Box
                      sx={{
                        fontWeight: "bold",
                        // cursor: "pointer",
                        fontStyle: "italic",
                        fontSize: 22,
                        textDecorationLine: "underline",
                      }}
                    >
                      {it.title}
                    </Box>
                  </Box>
                  <Box marginLeft={data?.isPara ? "0px" : "25px"}>
                    {!data?.isPara ? (
                      <ul>
                        {data?.description?.map((datum, ind) => (
                          <li key={ind}>
                            <Typography textAlign={"justify"}>
                              {datum}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        {data?.description?.map((desc, ind) => (
                          <Typography
                            key={ind}
                            textAlign={"justify"}
                            style={{ textIndent: "10%" }}
                            paragraph
                          >
                            {desc}
                          </Typography>
                        ))}
                      </>
                    )}
                  </Box>
                  <Box width={'100%'}>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontStyle: "italic",
                        // fontSize: 22,
                        textDecorationLine: "underline",
                      }}
                      textAlign={"end"}
                      onClick={() => handleModal(it.value)}
                    >
                      Read More+
                    </Box>
                  </Box>
                </>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Grid>
      {modal && EXPERIENCE_DETAILS[modal] && (
        <DetailModal
          open={modal && EXPERIENCE_DETAILS[modal] ? true : false}
          handleClose={() => handleModal()}
          data={EXPERIENCE_DETAILS[modal]}
        />
      )}
    </>
  );
};
export default Education;
