export default (expenses) => {
  const total = expenses.reduce(
    (accumaltor, currentValue) => accumaltor + currentValue.amount, 0
  );
  return total;
}; 
