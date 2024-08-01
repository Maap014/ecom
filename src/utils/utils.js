export function formatToDollar(val) {
  return val.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
