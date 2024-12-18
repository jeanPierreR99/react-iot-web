import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import SensorTree from "@/pages/sensor3/SensorTree";
import SensorOneExport from "@/pages/sensor1/SensorOneExport";
import SensorTwoExport from "@/pages/sensor2/SensorTwoExport";
import SensorTreeExport from "@/pages/sensor3/SensorTwoExport";
import SensorFourExport from "@/pages/sensor4/SensorFourExport";
import SensorFour from "@/pages/sensor4/SensorFour";
import { Loader2 } from "lucide-react";

const LoadingFallback = () => <div className="absolute left-0 w-full h-full bg-gray-100/70 z-10 flex justify-center items-center"><Loader2 className="animate-spin text-blue-500" /></div>
  ;

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const SensorOne = lazy(() => import("@/pages/sensor1/SensorOne"));
const SensorTwo = lazy(() => import("@/pages/sensor2/SensorTwo"));

const withSuspense = (Component: React.ReactNode) => (
  <Suspense fallback={<LoadingFallback />}>{Component}</Suspense>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        path: "/",
        element: withSuspense(<Home />),
      },
      {
        path: "/sensor-1/monitoreo",
        element: withSuspense(<SensorOne />),
      },
      {
        path: "/sensor-2/monitoreo",
        element: withSuspense(<SensorTwo />),
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

export const routesLogin: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(<Login />),
    errorElement: <div>Failed to load Login page.</div>,
  },
];
