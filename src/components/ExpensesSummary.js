import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'; 
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length;
  const expensesTotal = selectExpensesTotal(props.expenses);
  return (
    <div>
      <div>
        Viewing {expensesCount} 
        {expensesCount === 1 ? ' expense' : ' expenses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};


export default connect(mapStateToProps)(ExpensesSummary);
