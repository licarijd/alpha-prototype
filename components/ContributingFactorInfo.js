import React, { useState } from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import

export default function ContributingFactorInfo(props) {
	return (
    <div className='contributing-factor-info'>
        <div className='title'> {props.data.key} </div>
        <div className='group'>
            <div className='subtitle'> {props.data.points && props.data.points.points && props.data.points.points[0]} </div>
        </div>
        <div className='group'>
          <div className='subtitle'> {props.data.points && props.data.points.points && props.data.points.points[1]} </div>
        </div>
        <div className='text'> See your action items to reduce your risk of overtraining and REDS. </div>
        <div className='link'> Action Items </div>
    </div>
	);
}
  