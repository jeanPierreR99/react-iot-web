import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"
import useStoreSensor from "@/store/useStoreSensor";
import { useEffect, useState } from "react";
import { io } from 'socket.io-client';

// const socket = io('http://localhost:3000'); 

const socket = io('https://nest-iot-server.onrender.com');

export default function AppLayout() {
    const { setItems } = useStoreSensor();
    const [connection, setConnection] = useState(false);
    useEffect(() => {
        socket.on('connect', () => {
            setConnection(true)
            // setConnected(true);
        });
        // Escuchar el evento de desconexión
        socket.on('disconnect', () => {
            console.log('Desconectado del servidor');
            // setConnected(false);
        });

        //Escuchar mensajes del servidor
        socket.on('humidity', (msg) => {
            console.log(msg)
            const now = new Date();
            const newTime = now.toTimeString().split(" ")[0]; // Formato HH:mm:ss
            const newDesktop = Math.floor(Math.random() * 100);
            const newMobile = Math.floor(Math.random() * 100);
            const newSensorData = { time: newTime, desktop: newDesktop, mobile: newMobile };

            setItems("sensor1", newSensorData);
            setItems("sensor2", newSensorData);
            setItems("sensor3", newSensorData);
            setItems("sensor4", newSensorData);
            setItems("sensor5", newSensorData);
            setItems("sensor6", newSensorData);
        });

        // Limpiar el efecto al desmontar
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('humidity');
        };


    }, []);
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="px-2 md:px-4 pt-0 w-full">
                <SidebarTrigger className="mb-2" />
                {connection ? <span>Socket conectado</span> : <span>conectando...</span>}
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
