"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  return (
    <MapContainer center={[19.373375838985787, -99.22717299739273]} zoom={13}>
      <TileLayer
        url="https://www.openstreetmap.org/export#map=16/19.4522/-99.1764"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapView;
