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
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useStoreSensor, { IItemImp } from "@/store/useStoreSensor";

interface prop {
  chartConfig: any;
  name: string;
  sensor: string;
  description: string;
  resize?: boolean;
}

export const ChartMain: React.FC<prop> = ({ chartConfig, name, sensor, description, resize }) => {
  const { item } = useStoreSensor();
  const sensorKey = `${sensor}` as keyof IItemImp;

  const entries: any = Object.entries(chartConfig);
  const legend1 = entries[0][1].label
  const legend2 = entries[1] && entries[1][1] && entries[1][1].label

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
          className={`${resize ? "h-auto md:h-[calc(100vh-240px)] w-full" : ""}`}
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
              <linearGradient id={`fill${legend1}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${legend1})`} stopOpacity={0.8} />
                <stop offset="95%" stopColor={`var(--color-${legend1})`} stopOpacity={0.1} />
              </linearGradient>

              {legend2 && <linearGradient id={`fill${legend2}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${legend2})`} stopOpacity={0.8} />
                <stop offset="95%" stopColor={`var(--color-${legend2})`} stopOpacity={0.1} />
              </linearGradient>}
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
                fill: `var(--color-${legend1})`,
              }}
              activeDot={{
                r: 6,
              }}

              dataKey={legend1}
              type="natural"
              fillOpacity={0.4}
              fill={`url(#fill${legend1})`}
              stroke={`var(--color-${legend1})`}
            />
            {legend2 && <Area
              dot={{
                fill: `var(--color-${legend2})`,
              }}
              activeDot={{
                r: 6,
              }}

              dataKey={legend2}
              type="natural"
              fillOpacity={0.4}
              fill={`url(#fill${legend2})`}
              stroke={`var(--color-${legend2})`}
            />}
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
