import React from "react";
import { LineChart } from "@carbon/charts-react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";
import ContributingFactorChart1 from "./ContributingFactorChart1";
import ContributingFactorChart2 from "./ContributingFactorChart2";
import ContributingFactorChart3 from "./ContributingFactorChart3";

export default function ContributingFactors() {
	return (
    <div className = 'contributing-factor'>
      <ContributingFactorChart1/>
      <ContributingFactorChart2/>
      <ContributingFactorChart3/>
    </div>
	);
}
  