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

const otherIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const markers = [
  {
    nombre: "Clínica Veterinaria Zoovet MX",
    direccion:
      "F.C. Hidalgo 5109, La Joyita, Gustavo A. Madero, 07860 Ciudad de México, CDMX",
    coordenadas: { lat: 19.46784743029626, lng: -99.11851605191916 },
    sitio_web: "https://www.zoovetmx.com/bovinos",
  },
  {
    nombre:
      "Hospital Veterinario de Especialidades en Fauna Silvestre y Etología Clínica",
    direccion:
      "Av. Universidad 3000, C.U., Coyoacán, 04510 Ciudad de México, CDMX",
    coordenadas: { lat: 19.336242004028918, lng: -99.17730108673138 },
    sitio_web: "https://fmvz.unam.mx/fmvz/servicios/s_etologia.html",
  },
  {
    nombre: "Farmacia San Bernardo",
    direccion:
      "CALLE JUSTINA ESQ. CALZ DE TLALPAN S/N LOCAL F, COL. NATIVITAS, CP 03500 CIUDAD DE MÉXICO, CDMX",
    coordenadas: { lat: 19.384500100779295, lng: -99.13854122220386 },
    sitio_web: "http://www.farmaciasanbernardo.mx/",
  },
  {
    nombre: "Virbac México SA de CV",
    direccion:
      "Tecnology Park, Avenida Inglaterra #5070 A Guadalajara, 45010 Zapopan, Jal.",
    coordenadas: { lat: 20.899558381108037, lng: -103.47476787944971 },
    sitio_web: "https://mx.virbac.com/quienes-somos/contactanos",
  },
  {
    nombre: "NAVETSA",
    direccion:
      "Av. España 1059, Col. Moderna, C.P. 44190 Guadalajara, Jalisco, México",
    coordenadas: { lat: 20.801979961322452, lng: -103.34925378642113 },
    sitio_web: "https://www.navetsa.mx/nosotros/",
  },
  {
    nombre: "Veterinaria del Ángel",
    direccion:
      "Ignacio Zaragoza 321, La Piragua, 68380 San Juan Bautista Tuxtepec, Oax.",
    coordenadas: { lat: 18.15497323006882, lng: -96.11356005751189 },
    sitio_web: "https://veterinariadelangel.com/contacto/",
  },
  {
    nombre: "Intervet México, S.A. de C.V.",
    direccion:
      "Avenida San Jerónimo 369, Colonia la Otra Banda, Alvaro Obregón, 01090 CDMX, México",
    coordenadas: { lat: 19.33787818056317, lng: -99.20373693730973 },
    sitio_web:
      "https://www.msd-salud-animal.mx/comercializacion-de-servicios-veterinarios/",
  },
  {
    nombre: "FYNSA Veterinaria",
    direccion:
      "Ejido #94, San Felipe de Jesús, Gustavo A. Madero, C.P. 07510, CDMX, México",
    coordenadas: { lat: 19.49660327667397, lng: -99.07825089216605 },
    sitio_web: "https://fynsa.mx/productos/categoria/veterinaria/",
  },
];

function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMap();

  const handleLocate = () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 12);
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
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.coordenadas.lat, marker.coordenadas.lng]}
          icon={otherIcon}
        >
          <Popup>
            <strong>{marker.nombre}</strong>
            <br />
            {marker.direccion}
            <br />
            <a
              href={marker.sitio_web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitio web
            </a>
          </Popup>
        </Marker>
      ))}
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
