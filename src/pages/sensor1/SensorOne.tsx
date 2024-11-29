import { ChartMain } from '@/components/chart/ChartMain';
import React from 'react';
import { sensorData } from '@/lib/sensorData';

const SensorOne: React.FC = () => {
    return (
        <ChartMain
            name={sensorData.sensor1.name}
            sensor={sensorData.sensor1.sensor}
            description={sensorData.sensor1.description}
            resize={true}
        />
    );
};

export default SensorOne;