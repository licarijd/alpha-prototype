import React from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";
import RedsVsOvertrainingChart from "./RedsVsOvertrainingChart";

export default function RedsVsOvertraining() {
	return (
    <div>
      <div className='title'> Overtraining Risk vs REDS Risk Breakdown </div>
      <div className = 'contributing-factors'>
          <RedsVsOvertrainingChart/>
      </div>
    </div>
	);
}
  