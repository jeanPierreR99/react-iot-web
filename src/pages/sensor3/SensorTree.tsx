import { ChartMain } from '@/components/chart/ChartMain';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorTree: React.FC = () => {
    return (
        <ChartMain
            name={sensorData.sensor3.name}
            sensor={sensorData.sensor3.sensor}
            description={sensorData.sensor3.description}
            resize={true}
        />
    );
};

export default SensorTree;