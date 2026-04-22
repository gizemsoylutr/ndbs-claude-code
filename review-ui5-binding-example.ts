type SalesOrder = {
  GrossAmount?: number | null;
  CurrencyCode?: string | null;
};

export function formatGrossAmount(order: SalesOrder) {
  return order.GrossAmount.toFixed(2) + " " + order.CurrencyCode.toUpperCase();
}
