

import React from "react";
import { Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

const Heading = ({ heading, isSecondary = false }) => {
    const useStyles = makeStyles({
        linearText: {
            background: "-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        headingBar:{
            width: '75%',
            height: '3px',
            background:'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: '0.25rem'
        }
    })
    const classes = useStyles();
    return (
       
        <Box width='100%' display="flex" justifyContent='center' marginBottom='40px'>
            {isSecondary ? 
             <div>
             <div className={`${classes.headingBar}`} />
             <Typography variant="h3" color='whitesmoke'>{heading}</Typography>
           </div>
                : 
                <div>
                <div className={`${classes.headingBar}`} style={{background:'white'}}/>
                <Typography variant="h3" className={`${classes.linearText}`} >{heading}</Typography>
           </div>

            }
        </Box>
    )
}

export default Heading;
