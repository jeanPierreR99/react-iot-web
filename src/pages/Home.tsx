import { ChartMain } from "@/components/chart/ChartMain";
import { chartConfig1, chartConfig2, chartConfig3, chartConfig4, chartConfig5, chartConfig6 } from "@/lib/interfaceChart";
import { sensorData } from "@/lib/sensorData";

function Home() {

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <ChartMain chartConfig={chartConfig1} name={sensorData.sensor1.name} sensor={sensorData.sensor1.sensor} description={sensorData.sensor1.description} resize={false} />
      <ChartMain chartConfig={chartConfig2} name={sensorData.sensor2.name} sensor={sensorData.sensor2.sensor} description={sensorData.sensor2.description} resize={false} />
      <ChartMain chartConfig={chartConfig3} name={sensorData.sensor3.name} sensor={sensorData.sensor3.sensor} description={sensorData.sensor3.description} resize={false} />
      <ChartMain chartConfig={chartConfig4} name={sensorData.sensor4.name} sensor={sensorData.sensor4.sensor} description={sensorData.sensor4.description} resize={false} />
      <ChartMain chartConfig={chartConfig5} name={sensorData.sensor5.name} sensor={sensorData.sensor5.sensor} description={sensorData.sensor5.description} resize={false} />
      <ChartMain chartConfig={chartConfig6} name={sensorData.sensor6.name} sensor={sensorData.sensor6.sensor} description={sensorData.sensor6.description} resize={false} />
    </div>
  );
}

export default Home;
