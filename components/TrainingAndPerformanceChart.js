import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function TrainingAndPerformanceChart() {
	const data = [
		{
			"group": "Performance",
			"key": "September",
			"value": 80
		},
		{
			"group": "Performance",
			"key": "October",
			"value": 78
		},
		{
			"group": "Performance",
			"key": "November",
			"value": 70
		},
		{
			"group": "Performance",
			"key": "December",
			"value": 71
		},
		{
			"group": "Performance",
			"key": "January",
			"value": 65
		},
    {
      "group": "Training Intensity",
      "key": "September",
      "value": 34
    },
    {
      "group": "Training Intensity",
      "key": "October",
      "value": 56
    },
    {
      "group": "Training Intensity",
      "key": "November",
      "value": 59
    },
    {
      "group": "Training Intensity",
      "key": "December",
      "value": 80
    },
    {
      "group": "Training Intensity",
      "key": "January",
      "value": 79
    }
	]
	const options = {
	"title": "",
	"legend": {
    "truncation": {"threshold": 1000}
	},
    "axes": {
      "bottom": {
        "title": "Month",
        "mapsTo": "key",
        "scaleType": "labels"
      },
      "left": {
        "mapsTo": "value",
        "title": "Conversion rate",
        "scaleType": "linear"
      }
    },
    "height": "400px",
    "width": "80vw"
  }
	
	return (
    <div className = 'index-chart-1'>
      <LineChart
        data={data}
        options={options}>
      </LineChart>
    </div>
	);
}
  