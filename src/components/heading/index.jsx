

import React from "react";
import { Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

const Heading = ({ heading, isSecondary = false, variant='h3' }) => {
    const useStyles = makeStyles({
        linearText: {
            // background: "-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
            WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
        },
        headingBar:{
            width: '75%',
            height: '3px',
            background:'rgb(61,143,245)',
            // boxShadow: '0px 4px 4px rgb(61,143,245)',
            marginBottom: '0.25rem'
        }
    })
    const classes = useStyles();
    return (
        <Box width='100%' display="flex" justifyContent='center' marginBottom='40px'>
            {isSecondary ? 
             <div>
             <div className={`${classes.headingBar}`} />
             <Typography variant={variant} color='whitesmoke'>{heading}</Typography>
           </div>
                : 
                <div>
                <div className={`${classes.headingBar}`} style={{background:'white'}}/>
                <Typography variant={variant} className={`${classes.linearText}`} >{heading}</Typography>
           </div>

            }
        </Box>
    )
}

export default Heading;
