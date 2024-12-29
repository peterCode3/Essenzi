import React, { useState } from "react";
import SettingsTab from "./SettingsTab";
import AdminAccountSettingsTab from "./AdminAccountTab";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="settings-page">
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`tab-btn ${activeTab === "admin" ? "active" : ""}`}
          onClick={() => setActiveTab("admin")}
        >
          Admin Account
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "settings" && <SettingsTab />}
        {activeTab === "admin" && <AdminAccountSettingsTab />}
      </div>
    </div>
  );
};

export default SettingsPage;
