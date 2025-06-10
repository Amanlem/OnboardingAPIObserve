import React from "react";
import { FiHome, FiFileText, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FiHome /> Dashboard
        </li>
        <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FiFileText /> Ingest Logs
        </li>
        <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
          <FiSettings /> Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;