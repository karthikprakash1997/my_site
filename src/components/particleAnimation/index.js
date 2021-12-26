import React from "react";
import Particles from "react-tsparticles";

const ParticleAnimation = () => {
    return (
        <Particles
            id="tsparticles"
            container={'box'}
            options={{
                particles: {
                    color: {
                        value: ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"],
                    },
                    links: {
                        enable: false,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        random: true,
                    },
                    // number: {
                    //     density: {
                    //         enable: true,
                    //         value_area: 800,
                    //     },
                    //     value: 80,
                    // },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticleAnimation