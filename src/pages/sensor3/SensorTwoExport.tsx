import React from 'react';
import { sensorData } from '@/lib/sensorData';
import { ChartExport } from '@/components/chart/ChartExport';

const SensorTreeExport: React.FC = () => {
    return (
        <ChartExport
            name={sensorData.sensor3.name}
            description={sensorData.sensor3.description}
        />
    );
};

export default SensorTreeExport;