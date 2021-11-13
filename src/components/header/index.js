import React from "react";
import { HEADER } from '../../util';

const Header = ({ setSelectedComp }) => (
    <header class="header">
        <div class="logo">
            <img class="logo-img" src="../wp-content/uploads/2020/09/logo.png" alt="CV resume theme" />
            <span class="logo-lnk">
                Karthik<br />
            Prakash
            </span>
        </div>
        <a href="#" class="btn download-cv-btn" target="_blank" download>
            <span class="animated-button"><span>Download CV</span></span> <i class="icon fas fa-download"></i>
        </a>
        <div class="header-sidebar">
            <div class="top-menu">
                <div class="top-menu-nav">
                    <div class="menu-topmenu-container">
                        <ul id="menu-main-menu" class="menu">
                            {HEADER.map((it, index) => (
                                <li id={`menu-item-5${index}`} class="menu-item menu-item-type-custom menu-item-object-custom" onClick={() => setSelectedComp(it.value)}>
                                        <span style={{cursor:'pointer'}} class="animated-button"><span>{it.title}</span></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
export default Header