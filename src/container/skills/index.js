import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Javascript, LinkedIn, Twitter,Facebook, WhatsApp } from '@mui/icons-material';
import { Box } from "@mui/system";


const Skills = () => {

    const useStyles = makeStyles({
        'mt-100': {
            marginTop: 100
        }
    })

    const classes = useStyles();
    return (
        <Grid container spacing={2} maxWidth='lg' marginX='auto'>
            <div class={`titles ${classes['mt-100']}`} style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                <h2 class="title"><span> Skills</span></h2>
                {/* <div class="subtitle"><span> My Story </span></div> */}
            </div>
            {[1].map((it) =>
                <Grid item xs={12} sm={12} key={it} display='flex' justifyContent='center'>
                    <LazyMotion features={domAnimation}>
                        {/* <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{
                                scale: 1.1,
                            }}
                            exit={{ opacity: 0 }} >
                            <Card >
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>

                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </m.div> */}
                        <Box className='skill-list' display='flex' alignItems='center' justifyContent='between'>
                            <Javascript fontSize='large' />
                            <Twitter fontSize='large' />
                            <Facebook fontSize='large' />
                            <LinkedIn fontSize='large' />
                            <WhatsApp fontSize='large' />
                        </Box>
                    </LazyMotion>
                </Grid>
            )}
        </Grid>
    )
}
export default Skills;