import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

export default function ContributingFactorChart1() {
	const data = [
		{
			"group": "Gastrointestinal Health",
			"key": "Qty",
			"value": 34200
		},
		{
			"group": "Gastrointestinal Health",
			"key": "More",
			"value": 23500
		},
		{
			"group": "Gastrointestinal Health",
			"key": "Sold",
			"value": 53100
		},
		{
			"group": "Gastrointestinal Health",
			"key": "Restocking",
			"value": 42300
		},
		{
			"group": "Performance",
			"key": "Qty",
			"value": 34200
		},
		{
			"group": "Performance",
			"key": "More",
			"value": 53200
		},
		{
			"group": "Performance",
			"key": "Sold",
			"value": 42300
		},
		{
			"group": "Performance",
			"key": "Restocking",
			"value": 21400
		},
		{
			"group": "Performance",
			"key": "Misc",
			"value": 0
		}
	]
	const options = {
	"title": "Gastrointestinal Health and Performance",
	"legend": {
    "truncation": {"threshold": 1000}
	},
    "axes": {
      "bottom": {
        "title": "2019 Annual Sales Figures",
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
    <div className = 'contributing-factor'>
      <LineChart
        data={data}
        options={options}>
      </LineChart>
    </div>
	);
}
  