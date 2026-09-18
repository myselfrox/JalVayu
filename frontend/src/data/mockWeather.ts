import { DashboardData, ExtremeEvent, ForecastPoint, Location } from '../types/weather';
const locations: Location[] = [{id:'punjab',name:'Punjab',latitude:31.25,longitude:75.70},{id:'delhi',name:'Delhi NCR',latitude:28.61,longitude:77.21},{id:'rajasthan',name:'Rajasthan',latitude:27.02,longitude:74.22},{id:'assam',name:'Assam',latitude:26.20,longitude:92.94}];
const steps=['T+24h','T+48h','T+72h','T+96h','T+120h'];
export const mockForecast: ForecastPoint[] = steps.map((step,i)=>({step,timestamp:`2026-09-${20+i}T18:00:00Z`,location:locations[i%locations.length],temperature:39.5+i*.65,rainfall:82+i*15,wind_speed:27+i*3,humidity:61+i*2,apparent_temperature:42+i*.7,anomaly:{temperature:4.1+i*.7,rainfall:110+i*22,wind:12+i*4,heat:2.4+i*.45},ai:{isolation_forest_score:-.42-i*.08,risk_level:i>2?'EXTREME':i>0?'HIGH':'WATCH',confidence:.78+i*.025,detected_variables:i%2?['temperature','rainfall']:['heat','wind'],explanation:'Unusual rainfall and temperature conditions detected relative to the historical baseline.'}}));
export const mockEvents: ExtremeEvent[] = [
{id:'rain',type:'Extreme Rainfall',location:locations[0],startTime:'20 Sep · 18:00 UTC',duration:'18 hours',severity:'EXTREME',magnitude:'+194% baseline',confidence:.91,explanation:'Persistent precipitation signal across the Punjab basin.'},
{id:'heat',type:'Heat Anomaly',location:locations[1],startTime:'21 Sep · 12:00 UTC',duration:'30 hours',severity:'HIGH',magnitude:'+6.9°C',confidence:.87,explanation:'Apparent temperature remains well above seasonal baseline.'},
{id:'wind',type:'High Wind',location:locations[2],startTime:'22 Sep · 06:00 UTC',duration:'12 hours',severity:'HIGH',magnitude:'+21% baseline',confidence:.82,explanation:'Strong wind corridor developing over western Rajasthan.'},
{id:'persistent',type:'Persistent Temperature Anomaly',location:locations[3],startTime:'23 Sep · 00:00 UTC',duration:'42 hours',severity:'WATCH',magnitude:'+4.8°C',confidence:.79,explanation:'Temperature departure persists through multiple forecast windows.'}
];
export const mockData: DashboardData={forecast:mockForecast,events:mockEvents};
export { locations };
