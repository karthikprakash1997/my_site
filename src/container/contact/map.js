import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {

    const staticviewport = {
        width: "80%",
        height: 500,
        latitude: 11.006464,
        longitude: 76.945765,
        zoom: 8,
    };

    const [viewport, setViewPort] = useState(staticviewport);

    return (
        <div>
        <ReactMapGL
            {...viewport}
            height={500}
            width={'100%'}
            zoom={8}
            latitude={11}
            longitude={76}
            mapboxApiAccessToken={
                'pk.eyJ1Ijoia3BzMTgiLCJhIjoiY2t1cnpzbzRsMDVkNzJ2bHQwc3dtYjl5eiJ9.0zoBJGgsR0cgnSFdS_xc0g'
            }
            mapStyle='mapbox://styles/mapbox/streets-v11'
            onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        >
            {" "}
            <Marker
                latitude={11.006464}
                longitude={76.945765}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <p>My Residence</p>
                <div className="mapMarkerStyle" />
            </Marker>
        </ReactMapGL>
        </div>
    )
}

export default Map;