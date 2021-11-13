import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {

   

    return (
            <section
                class="elementor-section elementor-top-section elementor-element elementor-element-7d5d702 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="7d5d702"
                data-element_type="section"
                id="section-started"
            >
                <div class="elementor-container elementor-column-gap-no">
                    <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5cd59d3" data-id="5cd59d3" data-element_type="column">
                            <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                    <div
                                        class="elementor-element elementor-element-90dbefe elementor-widget elementor-widget-myour-started-section"
                                        data-id="90dbefe"
                                        data-element_type="widget"
                                        data-widget_type="myour-started-section.default"
                                    >
                                        <div class="elementor-widget-container">
                                            <div class="section started">
                                                <div class="centrize full-width">
                                                    <div class="vertical-center">
                                                        <Card>

                                                            <h1 class="h-title">
                                                                <span>
                                                                    Paula <br />
                                                                        Villalobos
                                                                    </span>
                                                            </h1>
                                                            <div class="started-content">
                                                                <div class="h-subtitles">
                                                                    <div class="h-subtitle typing-subtitle">
                                                                        <p><span> Web Designer </span></p>
                                                                        <p><span> Programmer </span></p>
                                                                        <p><span> Consultant and Mentor </span></p>
                                                                    </div>
                                                                    <span class="typed-subtitle"></span>
                                                                </div>
                                                                <div class="h-text">
                                                                    <div>
                                                                        <p>
                                                                            Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love
                                                                            to talk with you about our unique.
                                                                            </p>
                                                                    </div>
                                                                </div>
                                                                <a href="#section-contacts" class="btn">
                                                                    <span class="animated-button"><span>Contact Me</span></span> <i class="icon fas fa-chevron-right"></i>
                                                                </a>
                                                                {/* <a href="#" class="btn mouse-btn" style="display: none;"> <i class="icon fas fa-chevron-down"></i> </a> */}
                                                            </div>
                                                        </Card>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Home;