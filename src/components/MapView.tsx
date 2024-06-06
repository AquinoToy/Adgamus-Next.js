"use client";

import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple, LatLng } from "leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMap();

  const handleLocate = () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 13);
    });
  };

  return (
    <>
      <button
        onClick={handleLocate}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
        className="rounded-full p-2 border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
      >
        <MapPinIcon className="w-6 h-6 text-gray-700" />
      </button>
      {position === null ? null : (
        <Marker position={position} icon={customIcon}>
          <Popup>Tú estás aquí.</Popup>
        </Marker>
      )}
    </>
  );
}

function SetViewOnClick() {
  const animateRef = useRef(true);

  useMapEvents({
    click(e) {
      const map = e.target;
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current,
      });
    },
  });

  return null;
}

function MapPlaceholder() {
  return (
    <p>
      Mapa generandose{" "}
      <noscript>Necesitas javaScript para ver este mapa.</noscript>
    </p>
  );
}

function MapComponent() {
  const position: LatLngTuple = [19.655485144214488, -99.2045094725256];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%", zIndex: 40 }}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <SetViewOnClick />
    </MapContainer>
  );
}
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export default MapComponent;
