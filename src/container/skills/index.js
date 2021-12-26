import React from 'react';
import { Grid } from '@mui/material';
// import { Box } from "@mui/system";
// import Feature from '../../components/feature';
import Heading from '../../components/heading';
import { Box } from '@mui/system';



const Skills = () => {

    return (

        <Grid container className='card__layout' marginTop={'150px'} >
            <Heading heading="My Skills" isSecondary />
            <Box className='w-100'>
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
                <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' gap='20px'>
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />
                    <img src={require('../../assets/images/svg/APP/tools.svg')} alt='skills' style={{ height: '100px', width: '100px' }} />

                </Box>
            </Box>
        </Grid>
    )
}
export default Skills;