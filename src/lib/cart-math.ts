export type CartLine = { id: string; qty: number };

export function addLine(lines: CartLine[], id: string, qty = 1): CartLine[] {
  const found = lines.find((l) => l.id === id);
  if (found) return lines.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
  return [...lines, { id, qty }];
}

export function setQty(lines: CartLine[], id: string, qty: number): CartLine[] {
  if (qty <= 0) return lines.filter((l) => l.id !== id);
  return lines.map((l) => (l.id === id ? { ...l, qty } : l));
}

export function cartTotal(lines: CartLine[], priceOf: (id: string) => number | undefined): number {
  return lines.reduce((sum, l) => sum + (priceOf(l.id) ?? 0) * l.qty, 0);
}
