import { ChartMain } from '@/components/chart/ChartMain';
import React from 'react';
import { sensorData } from '@/lib/sensorData';
import { chartConfig1 } from '@/lib/interfaceChart';

const SensorOne: React.FC = () => {


    return (
        <ChartMain
            chartConfig={chartConfig1}
            name={sensorData.sensor1.name}
            sensor={sensorData.sensor1.sensor}
            description={sensorData.sensor1.description}
            resize={true}
        />
    );
};

export default SensorOne;