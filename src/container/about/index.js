import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from '@mui/material';
import { Box } from "@mui/system";
import Heading from '../../components/heading';

const About = ({ myref }) => {
  const useStyles = makeStyles({
    sectionAbout: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F8F9F9',
    },
    profile: {
      borderRadius: 10,
      '@media(max-width: 1440px)': {
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
    <Grid ref={myref} container className='card__layout' marginTop={'150px'} >
      <Grid item className='w-100'>
        <Heading heading="My Story" isSecondary />
      </Grid>

      <Grid container spacing={2} justifyContent='center' width='unset'>
        <Grid item xs={12} md={4} marginRight={20}>
          <img
            src={window.location.origin + "/assets/images/myself/1.jpg"}
            style={{ height: "400px", width: '500px' }}
            alt="achivemens"
            className={`${classes.profile}`}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Box display='flex' flexDirection='column' color='#ffffff'>
            <Typography lineHeight='26px' textAlign='justify'>
              {`I am a software developer with a passion for creating innovative and cutting-edge web applications. 
              I have 3.5+ years of experience in software development, and my expertise in React JS, Node JS, PostgreSQL, Python, and other web related technologies allows me to design and build web applications that are both functional and visually appealing. 
              `}
            </Typography>
            <Typography lineHeight='26px' textAlign='justify' mt='16px'>
              {`Additionally, my knowledge of Machine Learning and the Internet of Things gives me the ability to create applications that can learn from and adapt to user behavior and interact with physical devices.`}
            </Typography>
            {/* <List className={`${classes["pt-0"]}`}>
              {['Software Development', 'IoT'].map(it =>
              (<ListItem key={it} disablePadding>
                <Typography lineHeight='26px' mt='8px'>
                  * {it}
                </Typography>
              </ListItem>))}
            </List> */}
            <Typography lineHeight='26px' textAlign='justify' mt='16px'>
              I am a Graduate student doing MEng at Electrical and Computer Engineering in University of Waterloo with focus on software, AI/ML specialization.
            </Typography>

            <Typography lineHeight='26px' mt='16px'>
              I work in a niche and am eager to solve complex problems that can help society in any means. If you have one, do hit me.
            </Typography>

            <Typography lineHeight='26px' textAlign='justify' mt='16px'>
              I love reading books, if you do too or have/need any suggestion do hit me.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default About;
