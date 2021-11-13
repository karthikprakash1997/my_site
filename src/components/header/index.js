import React from "react";
import { HEADER } from '../../util';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Header = ({ setSelectedComp }) => {
  const useStyles = makeStyles({
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      left: 0,
      right: 0,
      borderRadius: 'unset',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: 50
    },
    logoLink: {
      maxWidth: 'unset',
      fontSize: 18,
      textDecoration: 'none',
      display: 'inline-block'
    },
    csvBtn: {
      height: 44,
      fontWeight: 'bold'
    },

  });
  const classes = useStyles();
  return (
    <header class={`header ${classes.header}`}>
      <div class="logo">
        {/* <img class="logo-img" src="../wp-content/uploads/2020/09/logo.png" alt="CV resume theme" /> */}
        <span class={`${classes.logoLink}`}>
          Karthik Prakash
        </span>
      </div>
      <Box display='flex' alignItems='center'>
        <div class="header-sidebar">
          <div class="top-menu">
            <div class="top-menu-nav">
              <div class="menu-topmenu-container">
                <ul id="menu-main-menu" class="menu">
                  {HEADER.map((it, index) => (
                    <li id={`menu-item-5${index}`} class="menu-item menu-item-type-custom menu-item-object-custom" onClick={() => setSelectedComp(it.value)}>
                      <span style={{ cursor: 'pointer' }} class="animated-button"><span>{it.title}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <a href="#" class="btn download-cv-btn" target="_blank" download>
          <span class="animated-button"><span>Download CV</span></span> <i class="icon fas fa-download"></i>
        </a> */}
        <Button variant="outlined" startIcon={<DownloadIcon />} size='small' className={`${classes.csvBtn}`}>
          < span > Download CV</span>
        </Button>
      </Box >
    </header >
  );
}

export default Header