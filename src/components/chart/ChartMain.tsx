import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useStoreSensor, { IItemImp } from "@/store/useStoreSensor";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface prop {
  name: string;
  sensor: string;
  description: string;
  resize?: boolean;
}

export const ChartMain: React.FC<prop> = ({ name, sensor, description, resize }) => {
  const { item } = useStoreSensor();
  const sensorKey = `${sensor}` as keyof IItemImp;




  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{name}</CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className={`${resize ? "h-[calc(100vh-240px)] w-full" : ""}`}
        >
          <AreaChart
            accessibilityLayer
            data={item[sensorKey]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={11}
            />
            <YAxis fontSize={11} tickLine={false} axisLine={false} tickMargin={8} />
            <Tooltip content={<ChartTooltipContent indicator="line" />} />
            <Area
              dot={{
                fill: "var(--color-mbile)",
              }}
              activeDot={{
                r: 6,
              }}

              dataKey="mobile"
              type="natural"
              fillOpacity={0.4}
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
            />
            <Area
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}

              dataKey="desktop"
              type="natural"
              fillOpacity={0.4}
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
