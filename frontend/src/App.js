import logo from './logo.svg';
         // if you're still using it
import React from 'react';

import './App.css';
import './index.css'; // Tailwind CSS

import Dashboard from './components/Dashboard';
//new
const BASE_URL = 'http://localhost:8000';

export async function fetchSummary() {
  const res = await fetch(`${BASE_URL}/ingestion-summary`);
  return res.json();
}

export async function fetchExternalIdStatus(id) {
  const res = await fetch(`${BASE_URL}/status?external_id=${id}`);
  return res.json();
}
//new
function App() {
  return <Dashboard />;
}

export default App;



