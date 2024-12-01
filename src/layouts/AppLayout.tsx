import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"
import useStoreSensor, { IItemImp } from "@/store/useStoreSensor";
import { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { sensorData } from "@/lib/sensorData";

// const socket = io('http://localhost:3000');

const socket = io('https://nest-iot-server.onrender.com');

export default function AppLayout() {
    const { setItems } = useStoreSensor();
    const [connection, setConnection] = useState(false);

    useEffect(() => {

        socket.on('connect', () => {
            setConnection(true)
        });

        socket.on('disconnect', () => {
            console.log('Desconectado del servidor');
        });

        //Escuchar mensajes del servidor
        socket.on('one', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor1.sensor as keyof IItemImp, msg);
        });
        socket.on('two', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor2.sensor as keyof IItemImp, msg);
        });
        socket.on('tree', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor3.sensor as keyof IItemImp, msg);
        });
        socket.on('four', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor4.sensor as keyof IItemImp, msg);
        });
        socket.on('five', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor5.sensor as keyof IItemImp, msg);
        });
        socket.on('six', (msg) => {
            console.log(msg)
            setItems(sensorData.sensor6.sensor as keyof IItemImp, msg);
        });
        // Limpiar el efecto al desmontar
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('one');
            socket.off('two');
            socket.off('tree');
            socket.off('four');
            socket.off('five');
            socket.off('six');
        };


    }, []);
    return (
        <SidebarProvider>
            <AppSidebar connection={connection} />
            <main className="px-2 py-6 md:px-4 pt-0 w-full">
                <SidebarTrigger className="mb-2" />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}
