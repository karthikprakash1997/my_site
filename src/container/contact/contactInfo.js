import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import { Send } from '@mui/icons-material';

const ContactInfo = () => {
    const useStyles = makeStyles({
        linearText: {
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        csvBtn: {
            maxWidth: 'max-content',
            borderColor: '#FE6B8B !important',
            height: 'max-content',
            marginTop: '20px !important',
            padding: '8px !important'
        },
        divpadding: {
            paddingBottom: 'inherit'
        },
        border :{
            '&.Mui-focused fieldset': {
                borderColor: '#FE6B8B !important',
            }
        }
    })
    const classes = useStyles();

    return (
        <>
            <div className={`${classes.divpadding}`}>
                <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Full Name"
                    className={`${classes.border}`}
                    focused
                    placeholder="Please enter your name"

                />
            </div>
            <div className={`${classes.divpadding}`}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                    // color="secondary"
                    focused
                    placeholder="Please enter your email id"
                />
            </div>
            <div className={`${classes.divpadding}`}>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    fullWidth
                    focused
                    placeholder="Write Something..."
                    rows={9}
                />
            </div>
            <Button variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}>Send Message   <Send htmlColor='#FE6B8B' /></Button>
        </>
    )
}

export default ContactInfo;