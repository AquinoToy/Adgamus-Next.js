"use client";

import { useSession, signOut } from "next-auth/react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import Image from "next/image";
import vaca from "@/assets/images/vaca.png";

function ProfilePage() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  console.log(session, status);
  const user = session?.user;
  const email = user?.email;
  const name = user?.username;
  
  
  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex flex-col items-center text-white gap-y-5">

      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center gap-4 p-6 l bg-gray-100">
          <Image 
          src={vaca} 
          className="w-20 h-20"
          width={600}
          height={400}/>
            
          <div className="text-center rounded-ful">
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{email}</p>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="bio text-black">Bio</Label>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email</Label>
            <Textarea
              id="bio"
              placeholder="Enter your bio"
              className="min-h-[100px] w-full text-black"
              defaultValue= "Eres un nuevo usuario, Bienvenido."
            />
          </div>
        </CardContent>
        <CardFooter className="p-6 flex justify-end">
          <button
            onClick={() => {
              signOut();
            }}
            className="bg-red-400 text-white rounded-xl px-4 py-2 mb2"
          >
            Cerrar Sesión
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProfilePage;
