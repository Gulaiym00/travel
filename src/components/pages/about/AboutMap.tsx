"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [42.8771, 74.6066];

const AboutMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Площадь Ала-Тоо</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AboutMap;
