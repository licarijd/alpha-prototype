import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart1b() {
	const data = [
		{
			"group": "Daily Fibre Intake (grams)",
			"key": "September",
			"value": 30
		},
		{
			"group": "Daily Fibre Intake (grams)",
			"key": "October",
			"value": 32
		},
		{
			"group": "Daily Fibre Intake (grams)",
			"key": "November",
			"value": 31
		},
		{
			"group": "Daily Fibre Intake (grams)",
			"key": "December",
			"value": 29
		},
		{
			"group": "Daily Fibre Intake (grams)",
			"key": "January",
			"value": 30
		}
	]
	const options = {
	"title": "Daily Fibre Intake",
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
        "title": "Daily Fibre Intake (grams)",
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
  