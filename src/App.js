import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const renderContent = () => {
    switch (activeTab) {
      case "Tab 1":
        return <p>This is the content for Tab 1.</p>;
      case "Tab 2":
        return <p>This is the content for Tab 2.</p>;
      case "Tab 3":
        return <p>This is the content for Tab 3.</p>;
      case "Tab 4":
        return <p>This is the content for Tab 4.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tab-section-container">
      <div className="tabs">
        {["Tab 1", "Tab 2", "Tab 3", "Tab 4"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content-card">{renderContent()}</div>
    </div>
  );
};

export default App;
