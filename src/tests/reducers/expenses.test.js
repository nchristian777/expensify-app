import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expenses', () => {
  const expense = {
    ...expenses[1],
    id: '4'
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    amount: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(0);
});

test('should not edit an expense if expense not found', () => {
   const updates = {
    amount: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses); 
});

test('should set expenses', () => {
  const intialstate = [{id: 34, amount:11}];
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer(intialstate, action);
  expect(state).toEqual(expenses);
});
