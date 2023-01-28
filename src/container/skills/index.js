import React from 'react';
import { Grid } from '@mui/material';
import Heading from '../../components/heading';
import { Box } from '@mui/system';
import { FULL_STACK_TOOLS, PROGRAMMING_LANG, TOOLS } from '../../util';

const Skills = ({ myref }) => {
    return (
        <Grid ref={myref} container className='card__layout' marginTop={'150px'} >
            <Heading heading="Tech Stack" isSecondary />
            <Box className='w-100'>
                <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' gap='30px'>
                    {PROGRAMMING_LANG.map(it => {
                        const icon = `/assets/images/programming-lang/${it}.png`
                        return (
                            <img key={it} src={window.location.origin + icon} alt={it} width={'60px'} height={'60px'} />
                        )
                    })}
                </Box>
            </Box>
            <Box className='w-100' marginTop={'5%'}>
                <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' gap='30px'>
                    {FULL_STACK_TOOLS.map(it => {
                        const icon = `/assets/images/tools/${it}.png`
                        return (
                            <img key={it} src={window.location.origin + icon} alt={it} width={it === 'express' ? '150px' : '60px'} height={'60px'} />
                        )
                    })}
                </Box>
            </Box>
            <Box className='w-100' marginTop={'5%'}>
                <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' gap='30px'>
                    {TOOLS.map(it => {
                        const icon = `/assets/images/tools/${it}.png`
                        return (
                            <img key={it} src={window.location.origin + icon} alt={it} width={it === 'express' ? '150px' : '60px'} height={'60px'} />
                        )
                    })}
                </Box>
            </Box>
        </Grid>
    )
}
export default Skills;