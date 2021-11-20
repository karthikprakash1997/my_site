import React from "react";
import { makeStyles } from "@mui/styles";

const Section = ({ children }) => {

    const useStyles = makeStyles({
        sectionMain: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
        }
    })

    const classes = useStyles();

    return (
        <section className={`${classes.sectionMain}`}>
            {children}
        </section>
    );
};
export default Section;
