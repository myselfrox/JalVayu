import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; import Home from './pages/Home'; import Dashboard from './pages/Dashboard'; import Events from './pages/Events'; import Analytics from './pages/Analytics';
export default function App(){return <div className="app"><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="/events" element={<Events/>}/><Route path="/analytics" element={<Analytics/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></div>}
