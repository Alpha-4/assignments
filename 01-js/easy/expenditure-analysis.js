/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  res = new Map([]);
  transactions.forEach((x) => {
    a = {};
    a.category = x.category;
    a.totalSpent = x.price;

    if (res.has(x.category)) {
      a.totalSpent = res.get(x.category).totalSpent + x.price;
      res.set(x.category, a);
    } else {
      res.set(x.category, a);
    }
  });
  return Array.from(res.values());
}

module.exports = calculateTotalSpentByCategory;
