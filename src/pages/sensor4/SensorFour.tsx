import { ChartMain } from '@/components/chart/ChartMain';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorFour: React.FC = () => {
    return (
        <ChartMain
            name={sensorData.sensor4.name}
            sensor={sensorData.sensor4.sensor}
            description={sensorData.sensor4.description}
            resize={true}
        />
    );
};

export default SensorFour;