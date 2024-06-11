"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Socket } from "socket.io";

function ChatPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {

    if (Socket.connected) {
      onConnect();
    }

  })


  return (
    <div className="flex flex-col h-screen">
      <header className="bg-green-900 text-white py-4 px-6">
        <h1 className="text-xl font-bold">Ayuda o Soporte</h1>
      </header>
      <div className="flex-1 flex">
        <div className="bg-gray-100 dark:bg-gray-800 w-1/4 p-6">
          <h2 className="text-lg font-bold mb-4">Usuarios Conectados</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">John Doe</span>
            </li>
            <li className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <span className="font-medium">Jane Ado</span>
            </li>
            <li className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <span className="font-medium">Sarah Mayer</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 max-w-[70%]">
                <p>Hola, ¿en qué puedo ayudarte?</p>
              </div>
            </div>
            <div className="flex items-start gap-4 justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-4 max-w-[70%]">
                <p>Tengo un problema con mi suscripción, ¿podrías ayudarme?</p>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/radix-vue.png" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 max-w-[70%]">
                <p>Claro, ¿cuál es el problema con tu suscripción?</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4">
            <div className="relative">
              <Textarea
                placeholder="Escribe tu mensaje..."
                className="w-full rounded-lg pr-16 resize-none p-4"
                rows={1}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute top-2 right-3"
              >
                <IoSend />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
