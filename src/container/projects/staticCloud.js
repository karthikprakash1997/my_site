import React from "react";
// import {
//   siTypescript as typescript,
//   siJavascript as javascript,
// } from "simple-icons";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import * as icons from "simple-icons";

// const staticIcons = [typescript, javascript];


export const cloudProps = {
  containerProps: {
    style: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // width: "100%",
      // paddingTop: 40,
      // maxWidth:'500px',
      // maxHeight:'200px',
      backgroundColor:"rgb(246,246,246)",
      borderRadius:'5%',
      boxShadow:'10px'
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  },
};

export const renderCustomIcon = (icon, bg) => {
  return renderSimpleIcon({
    icon,
    minContrastRatio: 2,
    bgHex: bg,
    size: 42,
    // fallbackHex: invertBg(bg),
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};


export const StaticCloud = () => {
  const iconMap = {
    // Programming
    typescript: icons.siTypescript,
    javascript: icons.siJavascript,
    python: icons.siPython,
    cplusplus: icons.siCplusplus,
    postgres: icons.siPostgresql,
    html5: icons.siHtml5,
    css3: icons.siCss3,
    // Front-end
    react: icons.siReact,
    reactrouter: icons.siReactrouter,
    // reactNative: icons.reactna
    // materialui: icons.siMaterialui,
    bootstrap: icons.siBootstrap,
    figma: icons.siFigma,
    // Back-end
    nodeDotJs: icons.siNodedotjs,
    express: icons.siExpress,
    postgresql: icons.siPostgresql,
    mongodb: icons.siMongodb,
    // DevOps and Cloud
    git: icons.siGit,
    github: icons.siGithub,
    docker: icons.siDocker,
    jira: icons.siJira,
    aws: icons.siAmazonaws,
    // Internet of Things and Machine Learning
    arduino: icons.siArduino,
    // matlab: icons.,
    tensorflow: icons.siTensorflow,
    // Soft Skills
    // leadership: icons.siLeadership,
    // teamviewer: icons.siTeamviewer
  };

  const iconsArray = Object.values(iconMap).map((SimpleIcon) => {
    return renderCustomIcon(SimpleIcon);
  });

  return <Cloud {...cloudProps}>{iconsArray}</Cloud>;
};



// export const StaticCloud = () => {
//   const cloudIcons = staticIcons.map((i) => renderCustomIcon(i));

//   return <Cloud {...cloudProps}>{cloudIcons}</Cloud>;
// };
