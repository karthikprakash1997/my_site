import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { VIW_POINT } from "../../util";

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
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
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