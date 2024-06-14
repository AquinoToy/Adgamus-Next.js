"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import Image from "next/image";
import granja from "@/assets/images/granja.jpeg";
import perfil from "@/assets/images/foto_perfil.jpg";

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0])
  }
  return (
    <div className="bg-white dark:bg-gray-950 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6">
      <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden w-full max-w-md">
        <div className="h-32 bg-[#00b894] relative">
          <Image
            src="/placeholder.svg"
            width={100}
            height={100}
            alt="User Avatar"
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full border-4 border-white dark:border-gray-950"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className="pt-16 px-6 pb-6">
          <form className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Juana Pérez</h2>
              <Button
                variant="outline"
                className="bg-[#00b894] text-white hover:bg-[#00a383] dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
              >
                Editar perfil
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value="juana.perez@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" className="min-h-[100px]">
                Desarrolladora web con pasión por la tecnología y la innovación.
              </Textarea>
            </div>
          </form>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              variant="outline"
              className="text-[#00b894] border-[#00b894] hover:bg-[#00b894] hover:text-white dark:text-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
            >
              Compartir
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex justify-center">
              {selectedImage ? (
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="User Avatar"
                  className="rounded-full border-4 border-white dark:border-gray-950"
                />
              ) : (
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="User Avatar"
                  className="rounded-full border-4 border-white dark:border-gray-950"
                />
              )}
            </div>
            <div className="mt-4">
              <Label htmlFor="image-upload">Cambiar imagen</Label>
              <Input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <button
        onClick={() => {
          signOut();
        }}
        className="bg-zinc-800 px-4 py-2 block mb2"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default ProfilePage;

