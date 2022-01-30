import React, { useState } from "react";
import { HEADER } from '../../util';
import { makeStyles } from '@mui/styles';
import { Box, IconButton, MenuItem, Menu, Typography, Fade } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ handleScroll }) => {

  const useStyles = makeStyles(theme => ({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 100,
      borderRadius: 'unset',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'unset',
      height: 70,
      padding: '0 50px',
      backgroundColor: '#040c18'
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',
      margin: 'unset'
    },
    menuItem: {
      padding: '0 20px',
      cursor:'pointer'
    },
    logoLink: {
      maxWidth: 'unset',
      fontSize: 18,
      textDecoration: 'none',
      display: 'inline-block'
    },
    background: {
      background: 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
      color: 'white'
    },
    burgerMenu: {
      height: 40,
      // background:'white',
      width: 40,
      '& svg': {
        height: 40,
        width: 40,
      }
    }
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  return (
    <header className={`header ${classes.header} `}>
      <Box className={`header-hldr`} display='flex' alignItems='center' marginLeft='auto'>
        <ul id="menu-main-menu" className={`${classes.menu}`}>
          {HEADER.map((it, index) => (
            <li key={it.value} id={`menu-item-5${index}`} className={`${classes.menuItem}`} onClick={() => handleScroll(it.value)}>
              <Typography fontWeight={600} color='whitesmoke'>{it.title}</Typography>
            </li>
          ))}
        </ul>
      </Box >
      <IconButton className={`${classes.burgerMenu} burger-menu`} edge='end' onClick={handleOpen}>
        {Boolean(anchorEl) ? <CloseIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        classes={{ paper: classes.background }}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        TransitionComponent={Fade}
      >
        {HEADER.map((it) =>
          <MenuItem
            key={it.value}
            onClick={() => {
              handleScroll(it.value);
              handleClose();
            }}>{it.title}</MenuItem>)}
      </Menu>
    </header >
  );
}

export default Header