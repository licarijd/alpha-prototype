import React from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";
import TrainingAndPerformanceChart from "./TrainingAndPerformanceChart";

export default function TrainingAndPerformance() {
	return (
    <div>
      <div className='title'> Training Intensity vs Performance </div>
      <div className = 'contributing-factors'>
          <TrainingAndPerformanceChart/>
      </div>
    </div>
	);
}
  