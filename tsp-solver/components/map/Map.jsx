"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from './Map.module.css';
import "leaflet/dist/leaflet.css";

export default function Map () {
    const position = [51.505, -0.09]
    return (
        <>
            <MapContainer
        className={styles.mapContainer}
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
        </>
    )
}