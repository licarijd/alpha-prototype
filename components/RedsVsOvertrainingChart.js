import React from "react";
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
// import "./ibm-plex-font.css";

class RedsVsOvertrainingChart extends React.Component {
	state = {
		data: [
      {
        "group": "Gastrointestinal Health",
        "key": "Overtraining Risk Factors",
        "value": 5
      },
      {
        "group": "Gastrointestinal Health",
        "key": "REDS Risk Factors",
        "value": 4
      },
      {
        "group": "Nutrition",
        "key": "Overtraining Risk Factors",
        "value": 2
      },
      {
        "group": "Nutrition",
        "key": "REDS Risk Factors",
        "value": 3
      },
      {
        "group": "Sleep",
        "key": "Overtraining Risk Factors",
        "value": 1
      },
      {
        "group": "Sleep",
        "key": "REDS Risk Factors",
        "value": 2
      },
      {
        "group": "Training and Life Stress",
        "key": "Overtraining Risk Factors",
        "value": 0
      },
      {
        "group": "Training and Life Stress",
        "key": "REDS Risk Factors",
        "value": 1
      }
        ],
    optionsDesktop: {
      "title": "",
      "bars": {
        "max-width": 500,
        "width": 500
      },
      "tooltip": { "truncation": { "threshold": 10000 }},
      "legend": {"truncation": { "threshold": 10000 }},
      "axes": {
        "left": {
          "mapsTo": "value",
          "stacked": true
        },
        "bottom": {
          "mapsTo": "key",
          "scaleType": "labels",
          "truncation": { "threshold": 10000 }
        }
      },
      "height": "400px",
      "width": "79vw"
    },
    optionsMobile: {
      "title": "",
      "bars": {
        "max-width": 50,
        "width": 50
      },
      "tooltip": { "truncation": { "threshold": 10000 }},
      "legend": {"truncation": { "threshold": 10000 }},
      "axes": {
        "left": {
          "mapsTo": "value",
          "stacked": true
        },
        "bottom": {
          "mapsTo": "key",
          "scaleType": "labels",
          "truncation": { "threshold": 10000 }
        }
      },
      "height": "400px",
      "width": "79vw"
    }
	};

	render = () => (
    <div className = 'index-chart-2'>
      <StackedBarChart
        data={this.state.data}
        options={this.state.optionsMobile}>
      </StackedBarChart>
    </div>
	);
}

export default RedsVsOvertrainingChart