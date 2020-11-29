import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart3() {
	const data = [
		{
			"group": "Hours of Sleep Daily",
			"key": "September",
			"value": 8.5
		},
		{
			"group": "Hours of Sleep Daily",
			"key": "October",
			"value": 8.5
		},
		{
			"group": "Hours of Sleep Daily",
			"key": "November",
			"value": 7.5
		},
		{
			"group": "Hours of Sleep Daily",
			"key": "December",
			"value": 7.1
		},
		{
			"group": "Hours of Sleep Daily",
			"key": "December",
			"value": 7.2
		}
	]
	const options = {
	"title": "Hours of Sleep Daily",
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
        "title": "Hours of Sleep Daily",
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
  