import React from 'react';
import { Grid } from '@mui/material';
import Heading from '../../components/heading';
import { Box } from '@mui/system';
import { ReactComponent as CLang } from '../../assets/images/programming-lang/c-lang.svg';
import { ReactComponent as JS } from '../../assets/images/programming-lang/js.svg';
import { ReactComponent as TS } from '../../assets/images/programming-lang/ts.svg';
import { ReactComponent as Python } from '../../assets/images/programming-lang/python.svg';
import { ReactComponent as CSharp } from '../../assets/images/programming-lang/c#.svg';
import { ReactComponent as Html } from '../../assets/images/programming-lang/html.svg';
import { ReactComponent as Css } from '../../assets/images/programming-lang/css.svg';

const Skills = ({ myref }) => {
    return (
        <Grid ref={myref} container className='card__layout' marginTop={'150px'} >
            <Heading heading="My Skills" isSecondary />
            <Box className='w-100'>
                <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' gap='20px'>
                    <JS />
                    <TS />
                    <Python />
                    <CLang />
                    <CSharp />
                    <CLang />
                    <Html />
                    <Css />
                    {/* <CLang />
                    <CLang />
                    <CLang />
                    <CLang /> */}
                </Box>
            </Box>
        </Grid>
    )
}
export default Skills;