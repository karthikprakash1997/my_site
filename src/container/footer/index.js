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
			// borderRadius: 'unset',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			// boxShadow: 'unset',
			background: 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
			height: 90,
			padding: '0 50px',
		},
		linearText: {
			// background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			// WebkitBackgroundClip: "text",
			// WebkitTextFillColor: "white",
		},
	}));

	const classes = useStyles();
	return (
		<footer id="colophon" className={`${classes.footer} ${classes.linearText}`}>
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