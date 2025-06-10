// src/pages/Dashboard.js
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import ChartPanel from "../components/ChartPanel";
import AssetList from "../components/AssetList";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard label="Total Assets" value="340" />
              <MetricCard label="Ingested Today" value="12" />
              <MetricCard label="Errors" value="3" />
              <MetricCard label="Pending" value="18" />
            </div>
            <ChartPanel />
            <AssetList />
          </main>
        </div>
      </div>
    </Layout>
  );
};


export default Dashboard;
