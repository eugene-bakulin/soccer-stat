import React from "react";
import "../loading/spinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-loader"></div>
    </div>
  );
};

export default LoadingSpinner;
