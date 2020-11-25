import React from "react";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
//import './styles.scss'
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
export default function RiskChart() {
	const data = [
    {
      "group": "Gastrointestinal Health",
      "value": 45
    },
    {
      "group": "Nutrition",
      "value": 20
    },
    {
      "group": "Sleep",
      "value": 8
    },
    {
      "group": "Training and Life Stress",
      "value": 5
    },
    {
      "group": "Mood States",
      "value": 5
    },
    {
      "group": "Misc",
      "value": 4
    }
  ]
  
  const options = {
    //"title": "REDS and Overtraining Risk - Contributing Factors",
    "title": '',
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Your REDS and Overtraining Risk Percentage"
      }, "alignment": "center"
    },
    "height": "750px",
    "width": "100%"
  }

	return (
    <div className='risk-chart'>
      <DonutChart
        data={data}
        options={options}>
      </DonutChart>
    </div>
	);
}