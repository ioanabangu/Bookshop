import React from 'react';
import './css/DrawerToggleButton.css';
const drawerToggleButton = props => (
<button className="toggle-button" onClick={props.click}>
    <div className ="toggle-button__line"/>
    <div className ="toggle-button__line"/>
    <div className ="toggle-button__line"/>
    </button>
);
export default drawerToggleButton;