import React from 'react';
import { sensorData } from '@/lib/sensorData';
import { ChartExport } from '@/components/chart/ChartExport';

const SensorFourExport: React.FC = () => {
    return (
        <ChartExport
            name={sensorData.sensor4.name}
            description={sensorData.sensor4.description}
        />
    );
};

export default SensorFourExport;