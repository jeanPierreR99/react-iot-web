import React from 'react';
import { sensorData } from '@/lib/sensorData';
import { ChartExport } from '@/components/chart/ChartExport';

const SensorOneExport: React.FC = () => {
    return (
        <ChartExport
            name={sensorData.sensor1.name}
            description={sensorData.sensor1.description}
        />
    );
};

export default SensorOneExport;