"use client";

import React from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface ContactMapProps {
  position: LatLngExpression;
}

const ContactMap: React.FC<ContactMapProps> = ({ position }) => {
  return (
    <div className="mt-12">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[300px] md:h-[480px] w-full z-40"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Beside Adeyi Filling Station <br /> Orogun Area, Iresa Road, Ogbomoso.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
