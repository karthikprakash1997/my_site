import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import { Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

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
        border: {
            '&.Mui-focused fieldset': {
                borderColor: '#FE6B8B !important',
            }
        },
        textColor: {
            color: 'white',
            '&::placeholder': {
                color: 'white',
            }
        },
        pinkTextColor: {
            color: '#FE6B8B !important',
        },
    })
    const classes = useStyles();

    const [typedValue, setValue] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleClick = () => {
        const template_params = {
            email_id: typedValue.email,
            from_name: typedValue.name,
            message: typedValue.message,
        };
        const service_id = "service_hxol8rp";
        const template_id = "template_ld264ew";
        emailjs
            .send(
                service_id,
                template_id,
                template_params,
                "user_F2cdrJa3K8XvhmWY0QLNh"
            )
            .then( (res) => {
                console.log(res, 'res')
                // setSnackBarOpen(true);
                // setSnackBarError(false);
                // setOpen(false);
                // setIsLoading(false);
            })
            .catch((res) => {
                console.log(res, 'err')
                // setSnackBarOpen(true);
                // setSnackBarError(false);
                // setOpen(false);
                // setIsLoading(false);
            });
    }

    return (
        <>
            <div className={`${classes.divpadding} contact-form`}>
                <TextField
                    required
                    id="outlined-required"
                    fullWidth
                    label="Full Name"
                    InputProps={{
                        className: `${classes.border} ${classes.textColor}`,
                    }}
                    InputLabelProps={{
                        className: classes.pinkTextColor,
                    }}
                    focused
                    placeholder="Please enter your name"
                    onChange={(e) => setValue({ ...typedValue, name: e.target.value })}
                    value={typedValue.name}
                />
            </div>
            <div className={`${classes.divpadding}`}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                    InputProps={{
                        className: `${classes.border} ${classes.textColor}`,

                    }}
                    InputLabelProps={{
                        className: classes.pinkTextColor,
                    }}
                    focused
                    placeholder="Please enter your email id"
                    onChange={(e) => setValue({ ...typedValue, email: e.target.value })}
                    value={typedValue.email}
                />
            </div>
            <div className={`${classes.divpadding}`}>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    InputProps={{
                        className: `${classes.border} ${classes.textColor}`
                    }}
                    InputLabelProps={{
                        className: classes.pinkTextColor,
                    }}
                    multiline
                    fullWidth
                    focused
                    placeholder="Write Something..."
                    rows={9}
                    onChange={(e) => setValue({ ...typedValue, message: e.target.value })}
                    value={typedValue.message}
                />
            </div>
            <Button onClick={handleClick} variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}>Send Message   <Send htmlColor='#FE6B8B' style={{ marginLeft: '10px' }} /></Button>
        </>
    )
}

export default ContactInfo;