let transactions = [
  { date: "2024-04-08", amount: 100 },
  { date: "2024-04-08", amount: 150 },
  { date: "2024-04-07", amount: 200 },
  { date: "2024-04-09", amount: 50 },
];

const checkBalance = (data, date) => {
  let totalAmount = 0;

  for (item of data) {
    if (item.date === date) {
      totalAmount += item.amount;
    }
  }

  return totalAmount;
};

const Result = checkBalance(transactions, "2024-04-07");

console.log(Result);
