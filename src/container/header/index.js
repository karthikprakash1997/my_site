import React, { useState } from "react";
import { HEADER } from '../../util';
import { makeStyles } from '@mui/styles';
import { Box, Drawer, IconButton, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Header = ({ setSelectedComp }) => {

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
    },
    linearText: {
      // background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "white",
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      listStyle: 'none',
      margin: 'unset'
    },
    menuItem: {
      padding: '0 20px'
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
    burgerMenu: {
      height: 40,
      width: 40,
      '& svg': {
        height: 40,
        width: 40,
      }
    }
  }));

  const classes = useStyles();

  const [isDrawerOpen, setDrawer] = useState(false);
  return (
    <header className={`header ${classes.header} ${classes.linearText}`}>
      <IconButton className={`${classes.burgerMenu} burger-menu`} color='inherit' edge='end' onClick={() => setDrawer(!isDrawerOpen)}>
        <Menu />
      </IconButton>
      <Box className={`header-hldr`} display='flex' alignItems='center' marginLeft='auto'>
        <div className={`header-sidebar`}>
          <div className="top-menu">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul id="menu-main-menu" className={`${classes.menu}`}>
                  {HEADER.map((it, index) => (
                    <li id={`menu-item-5${index}`} className={`${classes.menuItem}`} onClick={() => setSelectedComp(it.value)}>
                      <span style={{ cursor: 'pointer' }} className="animated-button"><span>{it.title}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box >
      <Drawer
        sx={{
          width: '300px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '300px'
          }
        }}
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setDrawer(false)}
      >
        <List>
          {['Home', 'About', 'Education & Experience', 'Skills', 'Projects', 'Contact'].map((it) =>
            <ListItem button key={`drawer-${it}`}>{it}</ListItem>)}
        </List>
      </Drawer>
    </header >
  );
}

export default Header