import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
// import { Box } from "@mui/system";
// import Feature from '../../components/feature';
import Heading from '../../components/heading';
// import C from '../../assets/images/svg/programmingLang/c.svg';



const Skills = () => {
    const useStyles = makeStyles({
        sectionAbout: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F9F9',
        },
        profile: {
            borderRadius: 10
        },
        profileName: {
            fontSize: 48,
            color: 'transparent',
            WebkitTextStroke: '1px #ffffff',
            textTransform: 'uppercase',
            fontWeight: 700
        },
        role: {
            fontSize: 36,
            fontWeight: 700
        },
        linearText: {
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        'pt-0': {
            paddingTop: 0
        },
        textIndent: {
            textIndent: 36
        }
    })

    const classes = useStyles();

    return (

        <Grid container className='card__layout' marginTop={'150px'} >
            <Heading heading="My Skills" isSecondary />
            <Grid container spacing={2}>
                {/* <ImageList >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            </Grid>
        </Grid>
    )
}
export default Skills;