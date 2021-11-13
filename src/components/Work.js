//import  ReactCSSTransitionGroup from'react-addons-css-transition-group'
import WorkItem from "./WorkItem";
import "../App.css";
import React, { Component } from "react";
class Work extends Component {
  render() {
    const getWorkExperience = () => {
      const workItems = [];
      this.props.workData.forEach((val, index) => {
        workItems.push(<WorkItem key={index} workItemData={val} />);
      });
      return workItems;
    };

    let showWorkitems = getWorkExperience();

    return <section className="work">{showWorkitems}</section>;
  }
}
export default Work;
