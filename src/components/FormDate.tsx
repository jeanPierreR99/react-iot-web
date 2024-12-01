"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Download, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import React, { useEffect } from "react"

const itemData = [
    // Datos existentes...
    { date: "2024-04-05", hour: "09:10:45", desktop: 320, mobile: 230 },
    { date: "2024-04-05", hour: "10:30:20", desktop: 290, mobile: 250 },
    { date: "2024-04-05", hour: "11:15:05", desktop: 310, mobile: 270 },
    { date: "2024-04-05", hour: "14:40:00", desktop: 350, mobile: 300 },

    // Nuevos datos para el 2024-04-05
    { date: "2024-04-05", hour: "15:00:30", desktop: 400, mobile: 350 },
    { date: "2024-04-05", hour: "16:30:45", desktop: 390, mobile: 360 },
    { date: "2024-04-05", hour: "18:15:20", desktop: 420, mobile: 380 },
    { date: "2024-04-05", hour: "20:45:10", desktop: 410, mobile: 370 },

    // Nuevos datos para el 2024-04-07
    { date: "2024-11-11", hour: "07:15:00", desktop: 380, mobile: 340 },
    { date: "2024-11-11", hour: "08:45:25", desktop: 420, mobile: 390 },
    { date: "2024-11-11", hour: "10:10:35", desktop: 440, mobile: 410 },
    { date: "2024-11-11", hour: "11:55:20", desktop: 470, mobile: 440 },
    { date: "2024-11-11", hour: "13:30:00", desktop: 490, mobile: 450 },
    { date: "2024-11-11", hour: "15:10:15", desktop: 510, mobile: 460 },
    { date: "2024-11-11", hour: "16:45:56", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "13:30:07", desktop: 490, mobile: 450 },
    { date: "2024-11-11", hour: "15:10:16", desktop: 510, mobile: 460 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:46:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:41:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:42:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:45:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:46:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:68:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:56:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:12:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:77:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:78:59", desktop: 530, mobile: 480 },
    { date: "2024-11-11", hour: "16:79:59", desktop: 530, mobile: 480 },
    // Nuevos datos para el 2024-04-10
    { date: "2024-11-10", hour: "06:30:30", desktop: 200, mobile: 180 },
    { date: "2024-11-10", hour: "08:00:45", desktop: 220, mobile: 200 },

];

const FormSchema = z.object({
    dob: z.date({
        required_error: "Fecha requerida.",
    }),
})

export interface IChartData {
    date: string;
    hour: string;
    desktop: number;
    mobile: number;
}

interface Props {
    charData: IChartData[];
    setChartData: (data: IChartData[]) => void;
    visible: boolean;
    setVisible: (value: boolean) => void;
    name: string;
}

export const FormDate: React.FC<Props> = ({ charData, setChartData, visible, setVisible, name }) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setVisible(true);
        const formatDate: any = format(data.dob, "yyyy-MM-dd");

        setTimeout(() => {
            const filteredData = itemData.filter(item => item.date === formatDate);
            setChartData(filteredData)
            setVisible(false);
        }, 3000);

    }

    useEffect(() => {
        form.reset();
    }, [name])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <div className="flex gap-2">
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "yyyy-MM-dd")
                                                ) : (
                                                    <span>Selecciona una fecha</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <Button disabled={visible ? true : false} className="w-fit bg-blue-500 hover:bg-blue-400" type="submit">Buscar {visible && <Loader2 className="animate-spin" />} </Button>
                                    {charData.length > 0 && <Button className="w-fit bg-green-500 hover:bg-green-400" type="button"><Download></Download>Exportar</Button>}
                                </div>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
