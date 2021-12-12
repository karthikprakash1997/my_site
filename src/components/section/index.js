import React from "react";
import { makeStyles } from "@mui/styles";
import "../../assets/css/animation-bg.css";import { Box } from "@mui/system";

const WrapperSection = ({ classVariant, children }) => {

    const useStyles = makeStyles({
        sectionMain: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            // background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
        },

    })

    const classes = useStyles();

    return (
        <section className={`${classes.sectionMain} ${classVariant}`}>
            <Box zIndex='1' width='100%'>
                {children}
            </Box>
        </section>
    );
};
export default WrapperSection;
