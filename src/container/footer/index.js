import React from "react";
import { makeStyles } from '@mui/styles';
import { LinkedIn, Email } from '@mui/icons-material';
import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
	const useStyles = makeStyles(() => ({
		footer: {
			// position: 'fixed',
			// top: 0,
			// left: 0,
			// right: 0,
			width: '100%',
			zIndex: 100,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
			height: 90,
			padding: '0 50px',
			marginTop:'150px'
		},
	}));

	const classes = useStyles();
	return (
		<footer id="colophon" className={`${classes.footer}`}>
			<Box className='skill-list' display='flex' alignItems='center' justifyContent='center'>
				<GitHubIcon fontSize='large' sx={{ color: 'white' }} />
				<LinkedIn fontSize='large' sx={{ color: 'white' }} />
				<Email fontSize='large' sx={{ color: 'white' }} />
			</Box>
			{/* <Box textAlign='center' fontSize='large' color='#ffffff'  display='flex' alignItems='center' justifyContent='center'>
				Karthik Prakash
			</Box> */}
		</footer>
	)
};

export default Footer;