import { ChartMain } from '@/components/chart/ChartMain';
import { chartConfig2 } from '@/lib/interfaceChart';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorTwo: React.FC = () => {

    return (
        <ChartMain
            chartConfig={chartConfig2}
            name={sensorData.sensor2.name}
            sensor={sensorData.sensor2.sensor}
            description={sensorData.sensor2.description}
            resize={true}
        />
    );
};

export default SensorTwo;