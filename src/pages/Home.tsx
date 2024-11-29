import { ChartMain } from "@/components/chart/ChartMain";
import { sensorData } from "@/lib/sensorData";

function Home() {

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <ChartMain name={sensorData.sensor1.name} sensor={sensorData.sensor1.sensor} description={sensorData.sensor1.description} resize={false} />
      <ChartMain name={sensorData.sensor2.name} sensor={sensorData.sensor2.sensor} description={sensorData.sensor2.description} resize={false} />
      <ChartMain name={sensorData.sensor3.name} sensor={sensorData.sensor3.sensor} description={sensorData.sensor3.description} resize={false} />
      <ChartMain name={sensorData.sensor4.name} sensor={sensorData.sensor4.sensor} description={sensorData.sensor4.description} resize={false} />
      <ChartMain name={sensorData.sensor5.name} sensor={sensorData.sensor5.sensor} description={sensorData.sensor5.description} resize={false} />
      <ChartMain name={sensorData.sensor6.name} sensor={sensorData.sensor6.sensor} description={sensorData.sensor6.description} resize={false} />
    </div>
  );
}

export default Home;
