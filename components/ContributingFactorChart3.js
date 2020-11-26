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
			"group": "Sleep",
			"key": "Qty",
			"value": 34200
		},
		{
			"group": "Sleep",
			"key": "More",
			"value": 23500
		},
		{
			"group": "Sleep",
			"key": "Sold",
			"value": 53100
		},
		{
			"group": "Sleep",
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
    "title": "Sleep and Performance",
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
  