import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import SensorTree from "@/pages/sensor3/SensorTree";
import SensorOneExport from "@/pages/sensor1/SensorOneExport";
import SensorTwoExport from "@/pages/sensor2/SensorTwoExport";
import SensorTreeExport from "@/pages/sensor3/SensorTwoExport";
import SensorFourExport from "@/pages/sensor4/SensorFourExport";
import SensorFour from "@/pages/sensor4/SensorFour";

// Importación de páginas (usa lazy para optimización)
const Home = lazy(() => import("@/pages/Home"));
const SensorOne = lazy(() => import("@/pages/sensor1/SensorOne"));
const SensorTwo = lazy(() => import("@/pages/sensor2/SensorTwo"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sensor-1/monitoreo",
        element: <SensorOne />,
      },
      {
        path: "/sensor-2/monitoreo",
        element: <SensorTwo />,
      },
      {
        path: "/sensor-3/monitoreo",
        element: <SensorTree />,
      },
      {
        path: "/sensor-4/monitoreo",
        element: <SensorFour />,
      },
      {
        path: "/sensor-1/export",
        element: <SensorOneExport />,
      },
      {
        path: "/sensor-2/export",
        element: <SensorTwoExport />,
      },
      {
        path: "/sensor-3/export",
        element: <SensorTreeExport />,
      },
      {
        path: "/sensor-4/export",
        element: <SensorFourExport />,
      },
    ],
  },
];
