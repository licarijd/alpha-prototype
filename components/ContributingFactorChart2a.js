import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart2a() {
	const data = [
		{
            "group": "Daily Carbohydrate Intake (grams)",
            "key": "September",
            "value": 500
        },
        {
            "group": "Daily Carbohydrate Intake (grams)",
            "key": "October",
            "value": 511
        },
        {
            "group": "Daily Carbohydrate Intake (grams)",
            "key": "November",
            "value": 489
        },
        {
            "group": "Daily Carbohydrate Intake (grams)",
            "key": "December",
            "value": 305
        },
        {
            "group": "Daily Carbohydrate Intake (grams)",
            "key": "January",
            "value": 250
        }
	]
	const options = {
    "title": "Daily Carbohydrate Intake",
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
        "title": "Daily Carbohydrate Intake (grams)",
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
  