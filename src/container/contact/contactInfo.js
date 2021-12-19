import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
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
    })
    const classes = useStyles();


    return (
        <div class="elementor-widget-container">
            <div class="contacts">
                <div class="content">

                    <div class="contact-form">
                        <div role="form" class="wpcf7" id="wpcf7-f57-p103-o1" lang="en-US" dir="ltr">
                            <div class="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                            </div>
                            <form
                                action="../../../../external.html?link=http://bslthemes.site/myour/light/home-v3/#wpcf7-f57-p103-o1"
                                method="post"
                                class="wpcf7-form init"
                                novalidate="novalidate"
                                data-status="init"
                            >
                                <div class="group-val">
                                    <div className={`label`}>Full name <strong>*</strong></div>
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-name">
                                            <input
                                                type="text"
                                                name="your-name"
                                                value=""
                                                size="40"
                                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                aria-required="true"
                                                aria-invalid="false"
                                                placeholder="ej.: Genoveva Lian Hullt"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <div class="group-val">
                                    <div className={`label`} >Email address <strong>*</strong></div>
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-email">
                                            <input
                                                type="email"
                                                name="your-email"
                                                value=""
                                                size="40"
                                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                aria-required="true"
                                                aria-invalid="false"
                                                placeholder="example@domain.com"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <div class="group-val">
                                    <div className={`label`}>Message <strong>*</strong></div>
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-message">
                                            <textarea
                                                name="your-message"
                                                cols="40"
                                                rows="10"
                                                class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                aria-required="true"
                                                aria-invalid="false"
                                                placeholder="To Write"
                                            ></textarea>
                                        </span>
                                    </p>
                                </div>
                                <div class="group-bts">
                                    <Button variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}><Send htmlColor='#FE6B8B' />Send Message</Button>
                                </div>
                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="name">Joe Wilson</div>
                        <div className={`label ${classes.linearText}`}>Consultant &amp; Mentor</div>
                        <div class="info-list">
                            <ul>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> Age: </span> </strong> <span> 24 </span>
                                </li>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> Residence: </span> </strong> <span> USA </span>
                                </li>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> Freelance: </span> </strong> <span> Available </span>
                                </li>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> Address: </span> </strong> <span> San Francisco </span>
                                </li>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> Phone: </span> </strong> <span> +1 256 254 84 56 </span>
                                </li>
                                <li>
                                    <strong> <span className={`label ${classes.linearText}`}> E-mail: </span> </strong> <span> jwilson@domain.com </span>
                                </li>
                            </ul>
                        </div>
                        <div class="author">Joe Wilson</div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;