import React from 'react';
import { sensorData } from '@/lib/sensorData';
import { ChartExport } from '@/components/chart/ChartExport';

const SensorTwoExport: React.FC = () => {
    return (
        <ChartExport
            name={sensorData.sensor2.name}
            description={sensorData.sensor2.description}
        />
    );
};

export default SensorTwoExport;