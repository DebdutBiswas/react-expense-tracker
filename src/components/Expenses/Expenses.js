import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const graphData = [
        {
            id: 'd1',
            year: 2019,
            data: [46, 23, 10, 67, 35, 72, 78, 18, 87, 6, 65, 50]
        },
        {
            id: 'd2',
            year: 2020,
            data: [78, 18, 46, 23, 35, 72, 10, 67, 87, 6, 65, 10]
        },
        {
            id: 'd3',
            year: 2021,
            data: [87, 6, 46, 23, 10, 67, 35, 72, 18, 78, 65, 45]
        },
        {
            id: 'd4',
            year: 2022,
            data: [67, 78, 18, 35, 72, 46, 23, 10, 87, 6, 65, 75]
        }
    ];

    const [filteredYear, setFilteredYear] = useState(graphData[0].year);

    const getExpenseYearHandler = (selectedExpenseYear) => {
        setFilteredYear(selectedExpenseYear);
    };

    const filteredExpenses = props.list.filter(expenseItem => expenseItem.date.getFullYear().toString() == filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter data={graphData} selectedYear={filteredYear} onChangeExpenseYear={getExpenseYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;