import React from 'react';
import { Divider } from '@mui/material';

const DividerComp = ({ borderColor }) => (
    <Divider sx={{ borderBottomWidth: '2px', borderColor, margin:'10px' }} variant='middle' />
);

export default DividerComp;
