import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import { VIW_POINT } from "../../util";

// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    const [viewport, setViewPort] = useState(VIW_POINT);

    return (
        <div>
            <ReactMapGl
                {...viewport}
                height={500}
                width={'100%'}
                zoom={viewport.zoom}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                mapboxApiAccessToken='pk.eyJ1Ijoia3BzMTgiLCJhIjoiY2t1cnpzbzRsMDVkNzJ2bHQwc3dtYjl5eiJ9.0zoBJGgsR0cgnSFdS_xc0g'
                mapStyle='mapbox://styles/mapbox/streets-v11'
                onViewportChange={(nextViewport) => setViewPort(nextViewport)}
            >
                <Marker
                    latitude={11.006464}
                    longitude={76.945765}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <div className="mapMarkerStyle" />
                </Marker>
            </ReactMapGl>
        </div>
    )
}

export default Map;