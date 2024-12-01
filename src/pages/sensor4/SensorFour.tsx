import { ChartMain } from '@/components/chart/ChartMain';
import { chartConfig4 } from '@/lib/interfaceChart';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorFour: React.FC = () => {

    return (
        <ChartMain
            chartConfig={chartConfig4}
            name={sensorData.sensor4.name}
            sensor={sensorData.sensor4.sensor}
            description={sensorData.sensor4.description}
            resize={true}
        />
    );
};

export default SensorFour;