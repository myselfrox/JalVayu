import { ForecastPoint } from '../types/weather';

type WeatherStatKey =
  | 'temperature'
  | 'rainfall'
  | 'wind_speed'
  | 'apparent_temperature';

type WeatherStat = {
  key: WeatherStatKey;
  value: number;
  unit: string;
  anomaly: number;
};

const labels: Record<WeatherStatKey, string> = {
  temperature: 'Temperature',
  rainfall: 'Rainfall',
  wind_speed: 'Wind',
  apparent_temperature: 'Feels like',
};

const formatValue = (value: number): string => value.toFixed(1);

export default function WeatherStats({ point }: { point: ForecastPoint }) {
  const items: WeatherStat[] = [
    {
      key: 'temperature',
      value: point.temperature,
      unit: '°C',
      anomaly: point.anomaly.temperature,
    },
    {
      key: 'rainfall',
      value: point.rainfall,
      unit: 'mm',
      anomaly: point.anomaly.rainfall,
    },
    {
      key: 'wind_speed',
      value: point.wind_speed,
      unit: 'km/h',
      anomaly: point.anomaly.wind,
    },
    {
      key: 'apparent_temperature',
      value: point.apparent_temperature,
      unit: '°C',
      anomaly: point.anomaly.heat,
    },
  ];

  return (
    <section className="panel">
      <div className="eyebrow">Weather statistics</div>
      <div className="stats-grid">
        {items.map((item) => (
          <div className="stat-card" key={item.key}>
            <div className="muted">{labels[item.key]}</div>
            <div className="stat-value">
              {formatValue(item.value)} <span>{item.unit}</span>
            </div>
            <div className={item.anomaly >= 0 ? 'anomaly positive' : 'anomaly negative'}>
              {item.anomaly >= 0 ? '+' : ''}
              {formatValue(item.anomaly)} anomaly
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
