import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LazyMotion, domAnimation, m } from "framer-motion"


const Skills = () => {

    return (
        <Grid container spacing={3} alignItems="stretch">
            {[1, 2, 3].map((it) =>
                <Grid item xs={12} sm={4} key={it}>
                    <LazyMotion features={domAnimation}>
                        <m.div
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
                        </m.div>
                    </LazyMotion>
                </Grid>
            )}
        </Grid>
    )
}
export default Skills;