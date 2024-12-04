"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
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
import React, { useEffect, useState } from "react"
import ButtonExport from "./ButtonExport"
import { handleDataFilterToExport } from "@/lib/functions"

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
    const [date, setDate] = useState<string>("");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(date: z.infer<typeof FormSchema>) {
        const formatDate: any = format(date.dob, "yyyy-MM-dd");
        setDate(formatDate)
        const handleFilter = await handleDataFilterToExport(formatDate, setVisible)
       console.log(handleFilter)
        setChartData(handleFilter?.data)
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
                                    {charData.length > 0 && <ButtonExport data={charData} fileName={`${name + ".(" + date + ")"}`}></ButtonExport>}
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
