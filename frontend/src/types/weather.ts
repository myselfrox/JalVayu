export type Variable = 'temperature' | 'rainfall' | 'wind' | 'heat';
export type RiskLevel = 'NORMAL' | 'WATCH' | 'HIGH' | 'EXTREME';
export interface Location { id:string; name:string; latitude:number; longitude:number; }
export interface WeatherData { temperature:number; rainfall:number; wind_speed:number; humidity:number; apparent_temperature:number; }
export interface AnomalyData { temperature:number; rainfall:number; wind:number; heat:number; }
export interface AIResult { isolation_forest_score:number; risk_level:RiskLevel; confidence:number; detected_variables:string[]; explanation:string; }
export interface ForecastPoint extends WeatherData { timestamp:string; step:string; anomaly:AnomalyData; ai:AIResult; location:Location; }
export interface ExtremeEvent { id:string; type:string; location:Location; startTime:string; duration:string; severity:RiskLevel; magnitude:string; confidence:number; explanation:string; }
export interface DashboardData { forecast:ForecastPoint[]; events:ExtremeEvent[]; }
