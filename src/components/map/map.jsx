import { useState, useMemo, useRef, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './map.css';

export function DraggableMarker({ center }) {
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);

    const eventHandlers = useMemo(() => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            }
        }), [markerRef, setPosition],
    );
    return (
        <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        />
    )
}

export function MarkerMap() {
    const [center, setCenter] = useState();

    useEffect(() => {
        navigator
            .geolocation
            .getCurrentPosition((position) => { 
                const { latitude, longitude } = position.coords;
                setCenter({
                    lat: latitude,
                    lng: longitude,
                });
            });
    }, [setCenter]);

    if (center) {
        return (
            <MapContainer 
                id='map' 
                center={center}
                zoom={16}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker center={center}/>
            </MapContainer>
        );
    }

    return;
}