import { Location, RiskLevel } from '../types/weather';
export default function MapLegend(){return <div className="map-legend"><b>Risk intensity</b>{(['NORMAL','WATCH','HIGH','EXTREME'] as RiskLevel[]).map(r=><div className="legend-item" key={r}><span className="legend-swatch" style={{background:{NORMAL:'#34d399',WATCH:'#f5dc70',HIGH:'#ff9d4d',EXTREME:'#ff4d78'}[r]}}/>{r}</div>)}</div>}
interface Props{location:Location; risk:RiskLevel; onSelect:()=>void; left:number; top:number}
export function Marker({location,risk,onSelect,left,top}:Props){return <button aria-label={`Focus ${location.name}`} className="marker" onClick={onSelect} style={{left:`${left}%`,top:`${top}%`,color:{NORMAL:'#34d399',WATCH:'#f5dc70',HIGH:'#ff9d4d',EXTREME:'#ff4d78'}[risk],background:'currentColor'}}/>}
