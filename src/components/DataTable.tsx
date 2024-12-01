import React from "react";
import { IChartData } from "./FormDate";

interface Prop {
    chartData: IChartData[]
}

const DataTable: React.FC<Prop> = ({ chartData }) => {
    // Calcular las sumas de desktop y mobile
    const totalDesktop = chartData.reduce((acc, item) => acc + item.desktop, 0);
    const totalMobile = chartData.reduce((acc, item) => acc + item.mobile, 0);

    // Calcular los promedios
    const averageDesktop = chartData.length > 0 ? (totalDesktop / chartData.length).toFixed(2) : 0;
    const averageMobile = chartData.length > 0 ? (totalMobile / chartData.length).toFixed(2) : 0;

    return (
        <div className="overflow-x-auto mt-6">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200 text-sm">
                        <th className="border-r border-gray-300 px-4 py-2 text-green-500">Hora</th>
                        <th className="border-r border-gray-300 px-4 py-2">Desktop</th>
                        <th className="px-4 py-2">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {chartData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 text-gray-500 text-center text-sm">
                            <td className="border-gray-300 px-4 py-2 text-green-500">{item.hour}</td>
                            <td className="border-gray-300 px-4 py-2">{item.desktop}</td>
                            <td className="border-gray-300 px-4 py-2">{item.mobile}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="border-t">
                        <th className="border-r">Promedio</th>
                        <th className="border-r">{averageDesktop}</th>
                        <th>{averageMobile}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default DataTable;