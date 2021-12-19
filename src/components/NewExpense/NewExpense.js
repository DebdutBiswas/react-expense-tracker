import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpensedata) => {
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString(),
        };

        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => setIsEditing(true);

    const stopEditingHandler = () => setIsEditing(false);

    if (!isEditing) {
        return (
            <div className="new-expense">
                <button onClick={startEditingHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            {/* pass a function through props so that it can be available and can be
            executed from child component and get data from child component to the
            parent component */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
        </div>
    );
};

export default NewExpense;