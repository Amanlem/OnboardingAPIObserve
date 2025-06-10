import React from "react";

const MetricCard = ({ label, value, icon }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center space-x-4">
      <div className="text-blue-500 text-2xl">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default MetricCard;