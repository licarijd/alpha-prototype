import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart1a() {
	const data = [
		{
			"group": "Daily Dairy Intake (mL)",
			"key": "September",
			"value": 250
		},
		{
			"group": "Daily Dairy Intake (mL)",
			"key": "October",
			"value": 300
		},
		{
			"group": "Daily Dairy Intake (mL)",
			"key": "November",
			"value": 450
		},
		{
			"group": "Daily Dairy Intake (mL)",
			"key": "December",
			"value": 750
		},
		{
			"group": "Daily Dairy Intake (mL)",
			"key": "January",
			"value": 750
		}
	]
	const options = {
	"title": "Daily Dairy Intake",
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
        "title": "Daily Dairy Intake (mL)",
        "scaleType": "linear"
      }
    },
    "height": "400px",
    "width": "80vw"
  }
	
	return (
    <div className = 'contributing-factor'>
      <LineChart
        data={data}
        options={options}>
      </LineChart>
    </div>
	);
}
  