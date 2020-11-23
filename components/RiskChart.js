import React from "react";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
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
    "title": "REDS and Overtraining Risk - Contributing Factors",
    "resizable": true,
    "donut": {
      "center": {
        "label": "Your REDS and Overtraining Risk Percentage"
      }
    },
    "height": "500px"
  }

	return (
		<DonutChart
			data={data}
			options={options}>
		</DonutChart>
	);
}