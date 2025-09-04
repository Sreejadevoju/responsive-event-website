import React, { useEffect, useState } from "react";

export default function EventCard({ event }) {
    // const [imgSrc, setImgSrc] = useState(null);

    // useEffect(() => {
    //     let isMounted = true; // to prevent setting state on unmounted component
    //     let objectUrl = null;

    //     const fetchImage = async () => {
    //         if (!event.imgUrl) return;

    //         try {
    //             const res = await fetch(event.imgUrl);
    //             const blob = await res.blob();
    //             objectUrl = URL.createObjectURL(blob);

    //             console.log("Fetched image URL:", objectUrl);

    //             if (isMounted) setImgSrc(objectUrl);
    //         } catch (err) {
    //             console.error("Image fetch failed", err);
    //         }
    //     };

    //     fetchImage();

    //     return () => {
    //         isMounted = false;
    //         if (objectUrl) URL.revokeObjectURL(objectUrl); // revoke the URL only on unmount
    //     };
    // }, [event.imgUrl]);

    return (
        <div className="event-card">
            {/* {imgSrc ? (
                <img src={imgSrc} alt={event.eventName} />
            ) : (
                <div style={{ width: "300px", height: "200px", background: "#eee" }}>
                    Loading...
                </div>
            )} */}
            <h3>{event.eventName}</h3>
            <p>{event.cityName}</p>
            <p>{new Date(event.date).toDateString()}</p>
            <p>{event.weather} • {Math.round(event.distanceKm)} km</p>
        </div>
    );
}
