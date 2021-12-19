import React from 'react';

import './VerticalProgressBar.css';

const VerticalProgressBar = props => {
    const progress = props.progress + '%';
    return (
        <div className='vertical-progress-bar'>
            <div className='vertical-progress-bar__bar'>
                <div className='vertical-progress-bar__progress' style={{height: progress}}/>
            </div>
            <div className='vertical-progress-bar__label'>{props.label}</div>
        </div>
    );
}

const Card = props => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default VerticalProgressBar;