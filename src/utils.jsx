function formatCurrency(money) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(money);
}

export { formatCurrency };
