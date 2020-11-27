import React from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import

export default function ContributingFactorInfo() {
	return (
    <div className='contributing-factor-info'>
        <div className='title'> Gastrointestinal Health </div>
        <div className='group'>
            <div className='subtitle'> Current Fibre Intake: 30g Daily </div>
            <div className='subtitle'> Recommended Fibre Intake: 40g Daily </div>
        </div>
        <div className='group'>
          <div className='subtitle'> Current Dairy Intake: 750mL Daily </div>
          <div className='subtitle'> Recommended Dairy Intake: 250g Daily </div>
        </div>
        <div className='text'> See your action items to reduce your risk of overtraining and REDS. </div>
        <div className='link'> Action Items </div>
    </div>
	);
}
  