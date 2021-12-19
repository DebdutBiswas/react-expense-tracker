import React from 'react';

import VerticalProgressBar from '../UI/VerticalProgressBar';
import Card from '../UI/Card';
import './ExpensesBarGraph.css';

const ExpensesBarGraph = props => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const barGraphs = [];
    let barGraphData = [];

    if (!props.data) barGraphData = Array(12).fill(0);
    else {
        if (props.data.length > 0) barGraphData = props.data;
        else barGraphData = Array(12).fill(0);
    }

    return(
        <Card className='expenses-bar-graph'>
            {barGraphData.map((data, index) => {
                return (
                    <VerticalProgressBar
                        label={months[index]}
                        progress={data}
                        key={index}
                    />
                );
            })}
        </Card>
    );
}

export default ExpensesBarGraph;