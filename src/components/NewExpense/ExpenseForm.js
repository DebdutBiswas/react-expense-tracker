import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //multi state approch
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    //single state approch
    // const [userInput, setUserInput] = useState({
    //     enteredTile: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value);
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value,
    //         }
    //     });
    // };

    // const amountChangeHandler = (event) => {
    //     console.log(event.target.value);
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredAmount: event.target.value,
    //         }
    //     });
    // };

    // const dateChangeHandler = (event) => {
    //     console.log(event.target.value);
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value,
    //         }
    //     });
    // };

    const submitHandler = (event) => {
        event.preventDefault(); //prevent default page reload on form submission

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //use 2 way binding for clearing the form after submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const cancelHandler = () => props.onCancel(false);

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="1970-01-01" max="2096-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;