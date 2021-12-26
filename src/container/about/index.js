import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, Typography, List, ListItem } from '@mui/material';
import { Box } from "@mui/system";
// import Feature from '../../components/feature';
import Heading from '../../components/heading';

const About = () => {
  const useStyles = makeStyles({
    sectionAbout: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F8F9F9',
    },
    profile: {
      borderRadius: 10,
      '@media(max-width: 1199px)': {
        width: '100% !important'
      },
      '@media(max-width: 992px)': {
        objectFit: 'contain',
        width: '100% !important'
      }
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
      <Grid item className='w-100'>
        <Heading heading="My Story" isSecondary />
      </Grid>

      <Grid container spacing={2} justifyContent='center' width='unset'>
        <Grid item xs={12} md={4} >
          <img
            src={require("../../assets/images/png/myself/2.jpg")}
            style={{ height: "450px", width: '400px' }}
            alt="achivemens"
            className={`${classes.profile}`}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Box display='flex' flexDirection='column' color='#ffffff'>
            <Typography lineHeight='26px' textAlign='justify'>
              I am an energetic individual addicted to the joy of developing products with computers and software. In my long journey of developing career, I worked on various IoT and Web/Mobile Applications. Being a developer, I have never been shy of learning cutting-edge technologies that solve complex and pervasive problems. I have always motivated myself to take ownership of the end-to-end development and focus on quality and the impact of the product.
            </Typography>
            <Typography fontWeight='bold' mt='10px' textAlign='justify' color={'#ffffff'}>
              I have 2+ years of experience on:
            </Typography>
            <List className={`${classes["pt-0"]}`}>
              {['IoT', 'Software Development - (Mobile and Web Application development)'].map(it =>
              (<ListItem disablePadding>
                <Typography lineHeight='26px' mt='8px'>
                  * {it}
                </Typography>
              </ListItem>))}
            </List>
            <Typography lineHeight='26px' textAlign='justify'>
              I am currently learning Machine Learning.  I am a prospective MEng student, eager to Machine Learning, software testing, and management.
            </Typography>
            <Typography lineHeight='26px' mt='16px'>
              I work in a niche and am eager to solve complex problems that can help society in any means. If you have one, do hit me.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default About;
