export function formatAmountDecimals(amount: number): number {
  return parseFloat(amount.toFixed(3));
}

export function formatAmountCommas(amount: number) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
