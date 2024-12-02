import React from 'react';
import * as XLSX from 'xlsx';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const ButtonExport: React.FC<any> = ({ data, fileName }) => {
    
    const exportExcel = () => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    return (
        <Button className="w-fit bg-green-500 hover:bg-green-400" type='button' onClick={() => { exportExcel() }}><Download></Download>Exportar</Button>
    );
};

export default ButtonExport;