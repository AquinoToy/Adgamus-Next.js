import { NextResponse } from "next/server";
import Veterinaria from "@/models/vet";
import { connectDB } from "@/libs/mongodb";

const initialVeterinarias = [
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

export async function POST() {
  await connectDB();

  const existingVeterinarias = await Veterinaria.find();

  if (existingVeterinarias.length === 0) {
    await Veterinaria.insertMany(initialVeterinarias);
    return NextResponse.json({
      message: "Datos iniciales agregados exitosamente",
    });
  } else {
    return NextResponse.json({ message: "Los datos iniciales ya existen" });
  }
}
