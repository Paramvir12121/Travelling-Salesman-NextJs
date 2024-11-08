// components/map/Map.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function Map({ locations=[], optimizedRoute=[] }) {
  const defaultPosition = [51.505, -0.09];
  const routePositions = optimizedRoute.map((loc) => [loc.lat, loc.lng]);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.address}</Popup>
        </Marker>
      ))}
      {optimizedRoute.length > 0 && (
        <Polyline positions={routePositions} color="blue" />
      )}
    </MapContainer>
  );
}
