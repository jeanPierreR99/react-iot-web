import { ChartMain } from '@/components/chart/ChartMain';
import { chartConfig3 } from '@/lib/interfaceChart';
import { sensorData } from '@/lib/sensorData';
import React from 'react';

const SensorTree: React.FC = () => {

    return (
        <ChartMain
            chartConfig={chartConfig3}
            name={sensorData.sensor3.name}
            sensor={sensorData.sensor3.sensor}
            description={sensorData.sensor3.description}
            resize={true}
        />
    );
};

export default SensorTree;