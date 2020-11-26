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
			"group": "Dataset 1",
			"key": "Qty",
			"value": 34200
		},
		{
			"group": "Dataset 1",
			"key": "More",
			"value": 23500
		},
		{
			"group": "Dataset 1",
			"key": "Sold",
			"value": 53100
		},
		{
			"group": "Dataset 1",
			"key": "Restocking",
			"value": 42300
		},
		{
			"group": "Dataset 2",
			"key": "Qty",
			"value": 34200
		},
		{
			"group": "Dataset 2",
			"key": "More",
			"value": 53200
		},
		{
			"group": "Dataset 2",
			"key": "Sold",
			"value": 42300
		},
		{
			"group": "Dataset 2",
			"key": "Restocking",
			"value": 21400
		},
		{
			"group": "Dataset 2",
			"key": "Misc",
			"value": 0
		}
	]
	const options = {
    "title": "Line (discrete)",
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
  