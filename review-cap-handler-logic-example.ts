type SubmitOrderRequest = {
  quantity: number;
  unitPrice: number;
  customerTier: "standard" | "premium";
};

export function calculateOrderTotal(req: SubmitOrderRequest) {
  let total = req.quantity * req.unitPrice;

  if (req.customerTier === "premium") {
    total = total * 0.8;
  }

  if (req.quantity > 100) {
    total = total * 0.5;
  }

  return total;
}
