import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart2b() {
	const data = [
		{
            "group": "Daily Caloric Intake",
            "key": "September",
            "value": 2500
        },
        {
            "group": "Daily Caloric Intake",
            "key": "October",
            "value": 2550
        },
        {
            "group": "Daily Caloric Intake",
            "key": "November",
            "value": 2450
        },
        {
            "group": "Daily Caloric Intake",
            "key": "December",
            "value": 2500
        },
        {
            "group": "Daily Caloric Intake",
            "key": "January",
            "value": 2475
        }
	]
	const options = {
    "title": "Gastrointestinal Health and Performance",
    "axes": {
      "bottom": {
        "title": "Month",
        "mapsTo": "key",
        "scaleType": "labels"
      },
      "left": {
        "mapsTo": "value",
        "title": "Daily Caloric Intake",
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
  