import { ChartMain } from '@/components/chart/ChartMain';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorTwo: React.FC = () => {
    return (
        <ChartMain
            name={sensorData.sensor2.name}
            sensor={sensorData.sensor2.sensor}
            description={sensorData.sensor2.description}
            resize={true}
        />
    );
};

export default SensorTwo;