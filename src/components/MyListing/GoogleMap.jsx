// 'use client'
// import React, { useEffect } from "react";
// import { GoogleMap, Marker } from "@react-google-maps/api";
// import { loadGoogleMaps } from "@/utils";

// const Map = (props) => {
//     const containerStyle = {
//         width: "100%",
//         height: "200px",
//     };

//     const { isLoaded } = loadGoogleMaps();


//     useEffect(() => {
//         if (window.google && isLoaded) {
//             // Initialize any Google Maps API-dependent logic here

//         }
//     }, [isLoaded]);

//     const center = {
//         lat: parseFloat(props.latitude),
//         lng: parseFloat(props.longitude),
//     };


//     const mapOptions = {
//         mapTypeControl: false, // Disables the map type (e.g., Satellite) control
//         streetViewControl: false, // Disables the Pegman and Street View feature
//     };


//     return (
//         isLoaded &&
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} options={mapOptions} >
//             <Marker position={center} />
//         </GoogleMap>
//     );
// };

// export default Map;
'use client';
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "200px",
};

const Map = ({ latitude, longitude }) => {
    const center = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAN-G9ziOvIMwNuo_XCDzjmw-9qc4y0x4U", // ✅ Or use process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });

    const mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
    };

    if (!isLoaded) {
        return <div>Loading map...</div>; // Optional loader
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={mapOptions}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default React.memo(Map);
