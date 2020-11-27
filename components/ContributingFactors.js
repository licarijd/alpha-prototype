import React from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";
import ContributingFactorChart1a from "./ContributingFactorChart1a";
import ContributingFactorChart1b from "./ContributingFactorChart1b";
import ContributingFactorChart2a from "./ContributingFactorChart2a";
import ContributingFactorChart2b from "./ContributingFactorChart2b";
import ContributingFactorChart3 from "./ContributingFactorChart3";

export default function ContributingFactors() {
	return (
    <div>
      <div className='title'> Top Contributing Factors to Overtraining and REDS Risk </div>
      <div className = 'contributing-factors'>
        <div className='subtitle'> Gastrointestinal Health Factors </div>
        <ContributingFactorChart2a/>
        <ContributingFactorChart2b/>
        <div className='subtitle'> Nutritional Factors </div>
        <ContributingFactorChart1a/>
        <ContributingFactorChart1b/>
        <div className='subtitle'> Sleep Factors </div>
        <ContributingFactorChart3/>
      </div>
    </div>
	);
}
  