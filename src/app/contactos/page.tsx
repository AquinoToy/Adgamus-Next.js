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
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

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
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Contactos de veterinarios</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 roundbordered-2xl shadow-xl space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
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
                <Select
                  id="DELEGACION"
                  value={form.DELEGACION}
                  onValueChange={(value) => setForm({ ...form, DELEGACION: value })}
                >
                  <SelectTrigger className="w-full rounded-md p-4">
                    <span>{form.DELEGACION || "Selecciona una delegación"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AGUASCALIENTES">AGUASCALIENTES</SelectItem>
                    <SelectItem value="BAJA CALIFORNIA">BAJA CALIFORNIA</SelectItem>
                    <SelectItem value="BAJA CALIFORNIA SUR">BAJA CALIFORNIA SUR</SelectItem>
                    <SelectItem value="CAMPECHE">CAMPECHE</SelectItem>
                    <SelectItem value="CHIAPAS">CHIAPAS</SelectItem>
                    <SelectItem value="CHIHUAHUA">CHIHUAHUA</SelectItem>
                    <SelectItem value="COAHUILA">COAHUILA</SelectItem>
                    <SelectItem value="COLIMA">COLIMA</SelectItem>
                    <SelectItem value="CIUDAD DE MEXICO">CIUDAD DE MEXICO</SelectItem>
                    <SelectItem value="DURANGO">DURANGO</SelectItem>
                    <SelectItem value="GUANAJUATO">GUANAJUATO</SelectItem>
                    <SelectItem value="GUERRERO">GUERRERO</SelectItem>
                    <SelectItem value="HIDALGO">HIDALGO</SelectItem>
                    <SelectItem value="JALISCO">JALISCO</SelectItem>
                    <SelectItem value="ESTADO DE MEXICO">MEXICO</SelectItem>
                    <SelectItem value="MICHOACAN">MICHOACAN</SelectItem>
                    <SelectItem value="MORELOS">MORELOS</SelectItem>
                    <SelectItem value="NAYARIT">NAYARIT</SelectItem>
                    <SelectItem value="NUEVO LEON">NUEVO LEON</SelectItem>
                    <SelectItem value="OAXACA">OAXACA</SelectItem>
                    <SelectItem value="PUEBLA">PUEBLA</SelectItem>
                    <SelectItem value="QUERETARO">QUERETARO</SelectItem>
                    <SelectItem value="QUINTANA ROO">QUINTANA ROO</SelectItem>
                    <SelectItem value="SAN LUIS POTOSI">SAN LUIS POTOSI</SelectItem>
                    <SelectItem value="SINALOA">SINALOA</SelectItem>
                    <SelectItem value="SONORA">SONORA</SelectItem>
                    <SelectItem value="TABASCO">TABASCO</SelectItem>
                    <SelectItem value="TAMAULIPAS">TAMAULIPAS</SelectItem>
                    <SelectItem value="TLAXCALA">TLAXCALA</SelectItem>
                    <SelectItem value="VERACRUZ">VERACRUZ</SelectItem>
                    <SelectItem value="YUCATAN">YUCATAN</SelectItem>
                    <SelectItem value="ZACATECAS">ZACATECAS</SelectItem>
                  </SelectContent>
                </Select>
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
            <TableBody >   
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
