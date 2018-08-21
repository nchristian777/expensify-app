import selectedExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectedExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = selectedExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const total = selectedExpensesTotal(expenses);
  expect(total).toBe(114195);
})
