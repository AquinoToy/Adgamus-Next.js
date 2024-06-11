"use client";

import axios from "axios";
import { useState, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface Contact {
  _id: string;
  NOMBRE: string;
  CLAVE: string;
  AREA: string;
  CORREO: string;
  DELEGACION: string;
  TELEFONO: string;
  "VIGENCIA INICIO": string;
  "VIGENCIA FIN": string;
}

function ContactosPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [form, setForm] = useState({
    NOMBRE: "",
    CLAVE: "",
    AREA: "",
    CORREO: "",
    DELEGACION: "",
    TELEFONO: "",
    "VIGENCIA INICIO": "",
    "VIGENCIA FIN": "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form data before submit:", form);
      const response = await axios.post("/api/contacts", form);
      console.log("Response data:", response.data);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    console.log("Form data on change:", form);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Contactos de veterinarios</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-gray-100 shadow-xl space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="NOMBRE">Nombre</Label>
                <Input
                  id="NOMBRE"
                  value={form.NOMBRE}
                  onChange={handleChange}
                  placeholder="Ingresa el nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="CLAVE">Clave</Label>
                <Input
                  id="CLAVE"
                  value={form.CLAVE}
                  onChange={handleChange}
                  placeholder="Ingresa la clave"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="CORREO">Correo</Label>
                <Input
                  id="CORREO"
                  value={form.CORREO}
                  onChange={handleChange}
                  type="email"
                  placeholder="Ingresa el correo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="DELEGACION">Delegación</Label>
                <select
                  id="DELEGACION"
                  value={form.DELEGACION}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm p-4"
                >
                  <option value="" disabled>
                    Selecciona una delegación
                  </option>
                  <option value="AGUASCALIENTES">AGUASCALIENTES</option>
                  <option value="BAJA CALIFORNIA">BAJA CALIFORNIA</option>
                  <option value="BAJA CALIFORNIA SUR">
                    BAJA CALIFORNIA SUR
                  </option>
                  <option value="CAMPECHE">CAMPECHE</option>
                  <option value="CHIAPAS">CHIAPAS</option>
                  <option value="CHIHUAHUA">CHIHUAHUA</option>
                  <option value="COAHUILA">COAHUILA</option>
                  <option value="COLIMA">COLIMA</option>
                  <option value="CIUDAD DE MEXICO">CIUDAD DE MEXICO</option>
                  <option value="DURANGO">DURANGO</option>
                  <option value="GUANAJUATO">GUANAJUATO</option>
                  <option value="GUERRERO">GUERRERO</option>
                  <option value="HIDALGO">HIDALGO</option>
                  <option value="JALISCO">JALISCO</option>
                  <option value="ESTADO DE MEXICO">MEXICO</option>
                  <option value="MICHOACAN">MICHOACAN</option>
                  <option value="MORELOS">MORELOS</option>
                  <option value="NAYARIT">NAYARIT</option>
                  <option value="NUEVO LEON">NUEVO LEON</option>
                  <option value="OAXACA">OAXACA</option>
                  <option value="PUEBLA">PUEBLA</option>
                  <option value="QUERETARO">QUERETARO</option>
                  <option value="QUINTANA ROO">QUINTANA ROO</option>
                  <option value="SAN LUIS POTOSI">SAN LUIS POTOSI</option>
                  <option value="SINALOA">SINALOA</option>
                  <option value="SONORA">SONORA</option>
                  <option value="TABASCO">TABASCO</option>
                  <option value="TAMAULIPAS">TAMAULIPAS</option>
                  <option value="TLAXCALA">TLAXCALA</option>
                  <option value="VERACRUZ">VERACRUZ</option>
                  <option value="YUCATAN">YUCATAN</option>
                  <option value="ZACATECAS">ZACATECAS</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="AREA">Área</Label>
              <Input
                id="AREA"
                value={form.AREA}
                onChange={handleChange}
                placeholder="Ingresa el área"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="TELEFONO">Teléfono</Label>
              <Input
                id="TELEFONO"
                value={form.TELEFONO}
                onChange={handleChange}
                placeholder="Ingresa el teléfono"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="VIGENCIA_INICIO">Vigencia Inicio</Label>
                <Input
                  id="VIGENCIA_INICIO"
                  value={form.VIGENCIA_INICIO}
                  onChange={handleChange}
                  placeholder="DD/MM/AA"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="VIGENCIA_FIN">Vigencia Fin</Label>
                <Input
                  id="VIGENCIA_FIN"
                  value={form.VIGENCIA_FIN}
                  onChange={handleChange}
                  placeholder="DD/MM/AA"
                />
              </div>
            </div>
            <Button
              className="flex h-10 w-full items-center justify-center rounded-xl border text-sm transition-all focus:outline-none bg-elementos text-white hover:bg-resaltar"
              type="submit"
            >
              Buscar
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Resultados de la búsqueda</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Clave</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Delegación</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Vigencia Inicio</TableHead>
                <TableHead>Vigencia Fin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell>{contact.NOMBRE}</TableCell>
                  <TableCell>{contact.CLAVE}</TableCell>
                  <TableCell>{contact.AREA}</TableCell>
                  <TableCell>
                    <a href={`mailto:${contact.CORREO}`}>{contact.CORREO}</a>
                  </TableCell>
                  <TableCell>{contact.DELEGACION}</TableCell>
                  <TableCell>{contact.TELEFONO}</TableCell>
                  <TableCell>{contact["VIGENCIA INICIO"]}</TableCell>
                  <TableCell>{contact["VIGENCIA FIN"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactosPage;
