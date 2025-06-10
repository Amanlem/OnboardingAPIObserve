import React, { useEffect, useState } from "react";

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/assets")
      .then((res) => res.json())
      .then((data) => {
        setAssets(data.assets || []);  // assuming JSON is { "assets": [ ... ] }
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Asset Ingestion Status</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Status</th>
            <th className="text-left">Retry Count</th>
            <th className="text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={idx}>
              <td>{asset.external_id}</td>
              <td>{asset.status}</td>
              <td>{asset.retry_count}</td>
              <td>{asset.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;
