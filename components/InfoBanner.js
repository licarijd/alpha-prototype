import React, { useState } from "react";
import "@carbon/charts/styles-g90.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import

export default function InfoBanner({ title, subtitle, button }) {
	return (
    <div className='info-banner'>
        <div className='border'/>
        <div className='subtitle'> {title} </div>
        <div className='subtitle-small'> {subtitle} </div>
        {
          button && <button className='link'> {button.text} </button>
        }
        <div className='border'/>
    </div>
	);
}
  