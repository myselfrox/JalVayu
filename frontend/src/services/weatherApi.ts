import axios from 'axios';
import { mockData } from '../data/mockWeather';
import { DashboardData, ExtremeEvent, ForecastPoint } from '../types/weather';
const client=axios.create({baseURL:import.meta.env.VITE_API_URL || '/api',timeout:8000});
export async function getWeather():Promise<DashboardData>{ return mockData; }
export async function getForecast():Promise<ForecastPoint[]>{ return mockData.forecast; }
export async function getAnomalies():Promise<ForecastPoint[]>{ return mockData.forecast; }
export async function getExtremeEvents():Promise<ExtremeEvent[]>{ return mockData.events; }
export { client };
