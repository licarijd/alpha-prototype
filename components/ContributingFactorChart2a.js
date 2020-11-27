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
            "group": "Grams of Carbohydrates Daily",
            "key": "September",
            "value": 500
        },
        {
            "group": "Grams of Carbohydrates Daily",
            "key": "October",
            "value": 511
        },
        {
            "group": "Grams of Carbohydrates Daily",
            "key": "November",
            "value": 489
        },
        {
            "group": "Grams of Carbohydrates Daily",
            "key": "December",
            "value": 305
        },
        {
            "group": "Grams of Carbohydrates Daily",
            "key": "January",
            "value": 250
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
        "title": "Grams of Carbohydrates Daily",
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
  