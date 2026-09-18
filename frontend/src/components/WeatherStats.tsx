import React from "react";

type WeatherStatsProps = {
  temperature?: number;
  rainfall?: number;
  windSpeed?: number;
  heatIndex?: number;
};

type StatItem = {
  label: string;
  value: string;
  unit: string;
};

const WeatherStats: React.FC<WeatherStatsProps> = ({
  temperature = 0,
  rainfall = 0,
  windSpeed = 0,
  heatIndex = 0,
}) => {
  const items: StatItem[] = [
    {
      label: "Temperature",
      value: temperature.toFixed(1),
      unit: "°C",
    },
    {
      label: "Rainfall",
      value: rainfall.toFixed(1),
      unit: "mm",
    },
    {
      label: "Wind Speed",
      value: windSpeed.toFixed(1),
      unit: "km/h",
    },
    {
      label: "Heat Index",
      value: heatIndex.toFixed(1),
      unit: "°C",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          <p className="text-sm text-white/60">{item.label}</p>

          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-white">
              {item.value}
            </span>

            <span className="text-sm text-white/50">{item.unit}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeatherStats;
