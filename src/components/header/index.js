import React from "react";
import { HEADER } from '../../util';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const Header = ({ setSelectedComp }) => {
  const useStyles = makeStyles({
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
      boxShadow: 'unset',
      backdropFilter: 'saturate(180%) blur(20px)',
      backgroundColor: 'rgba(255,255,255,0.72)',
      height: 70,
      padding: '0 50px',
      color: '#24292f'
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

  });
  const classes = useStyles();
  return (
    <header className={`header ${classes.header}`}>
      <Box display='flex' alignItems='center' marginLeft='auto'>
        <div className="header-sidebar">
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
    </header >
  );
}

export default Header