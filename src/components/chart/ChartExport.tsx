"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { FormDate, IChartData } from "../FormDate";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import DataTable from "../DataTable";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
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
  description: string;
}
export const ChartExport: React.FC<prop> = ({ name, description }) => {
  const [chartData, setChartData] = useState<IChartData[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setChartData([])
  }, [name])

  return (
    <Card>
      <CardHeader className=" border-b">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <FormDate charData={chartData} setChartData={setChartData} visible={visible} setVisible={setVisible} name={name}></FormDate>
      </CardHeader>


      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 relative overflow-hidden">
        {visible && <div className="absolute top-5 w-full h-full bg-white/70 z-10 flex justify-center"><Loader2 className="animate-spin text-blue-500" /></div>}
        {
          chartData.length > 0 ?
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[calc(100vh-310px)] w-auto overflow-x-auto"

            >
              <AreaChart data={chartData}>
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
                  dataKey="hour"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={11}
                  minTickGap={32}
                  interval={4}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      nameKey="hour"
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dot={{
                    fill: "var(--color-mbile)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  stroke="var(--color-mobile)"
                  stackId="a"
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
                  fill="url(#fillDesktop)"
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer> : <CardDescription>No hay datos</CardDescription>
        }
        {chartData.length > 0 && <DataTable chartData={chartData}></DataTable>}
      </CardContent>
    </Card >

  );
}
