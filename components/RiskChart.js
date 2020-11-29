import React, { useEffect } from "react";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
import ContributingFactorInfo from "./ContributingFactorInfo";
import { contributingFactorInfo } from '../mock-data/appData'
//import './styles.scss'
// Or
// //import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
class RiskChart extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedSliceData: undefined,
      selectedSliceKey: undefined
    }
  }

  componentDidMount() {
    this.chartRef.chart.services.events.addEventListener("pie-slice-click", e => {
      console.log(e.detail.datum.data.group)
      this.setState({ selectedSliceData: contributingFactorInfo[e.detail.datum.data.group] })
      this.setState({ selectedSliceKey: e.detail.datum.data.group })
    })
  }

  render() {
    const risk = 87
    const data = [
      {
        "group": "Gastrointestinal Health",
        "value": 45
      },
      {
        "group": "Nutrition",
        "value": 20
      },
      {
        "group": "Sleep",
        "value": 8
      },
      {
        "group": "Training and Life Stress",
        "value": 5
      },
      {
        "group": "Mood States",
        "value": 5
      },
      {
        "group": "Misc",
        "value": 4
      }
    ]
    
    const options = {
      //"title": "REDS and Overtraining Risk - Contributing Factors",
      "title": '',
      "resizable": true,
      "legend": {
        "alignment": "center",
        "truncation": {"threshold": 1000}
        //"clickable": false
      },
      "tooltip": {
        "truncation": {"threshold": 1000}
      },
      "donut": {
        "center": {
          "label": "Your REDS and Overtraining Risk",
          "numberFontSize": () => "120px",
          "titleFontSize": () => "30px",
          "titleYPosition": n => 0.175*n,
          "numberFormatter": () => risk/*s => `${s}%`*/
        },
        "alignment": "center"
      },
      /*"pie": {
        "labels": { "formatter": () => "example" }
      },*/
      "height": "750px",
      "width": "100%"
    }
    const key = this.state.selectedSliceKey || "Gastrointestinal Health"
    return (
      <div className='risk-chart-container'>
        <ContributingFactorInfo data={ {key, points: this.state.selectedSliceData || contributingFactorInfo["Gastrointestinal Health"].points} }></ContributingFactorInfo>
        <div className='title'> Contributing Factors to Your Risk of Overtraining and REDS</div>
        <div className='risk-chart'>
          <DonutChart
            data={data}
            options={options}
            ref={chartRef => (this.chartRef = chartRef)}>
          </DonutChart>
        </div>
      </div>
    )
  }
}

export default RiskChart