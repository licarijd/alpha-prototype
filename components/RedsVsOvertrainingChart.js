import React from "react";
import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
import { MAX_BREAKPOINT_MEDIUM, MAX_BREAKPOINT_MOBILE } from "../constants";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
// import "./ibm-plex-font.css";

class RedsVsOvertrainingChart extends React.Component {

  constructor() {
    super()
    this.state = {
      screenWidth: undefined,
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
          "max-width": 400,
          "width": 400
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
      optionsDesktopMedium: {
        "title": "",
        "bars": {
          "max-width": 200,
          "width": 200
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
  }

  componentDidMount() {
    if (window)
      this.setState({ screenWidth: window.innerWidth })
  }

	render = () => (
    <div className = 'index-chart-2'>
      <StackedBarChart
        data={this.state.data}
        options={this.state.screenWidth <= MAX_BREAKPOINT_MOBILE ? this.state.optionsMobile : this.state.screenWidth > MAX_BREAKPOINT_MEDIUM ? this.state.optionsDesktop : this.state.optionsDesktopMedium}>
      </StackedBarChart>
    </div>
	);
}

export default RedsVsOvertrainingChart