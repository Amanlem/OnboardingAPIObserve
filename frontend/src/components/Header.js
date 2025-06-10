import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Asset Ingestion Dashboard
        </h1>
      <nav>
        <ul className="flex gap-4 text-sm text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Ingest</li>
          <li className="hover:text-gray-900 cursor-pointer">Assets</li>
          <li className="hover:text-gray-900 cursor-pointer">Logs</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;