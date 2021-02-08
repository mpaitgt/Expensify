const getTotalExpenses = (expenses) => {
  return expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
};

export default getTotalExpenses;