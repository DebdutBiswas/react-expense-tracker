import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2019, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e5',
    title: 'Table Lamp',
    amount: 220,
    date: new Date(2022, 10, 2),
  },
  {
    id: 'e6',
    title: 'Book',
    amount: 89,
    date: new Date(2022, 11, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(previousExpenses => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div id="expenses-container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses list={expenses} />
    </div>
  );
}

export default App;
