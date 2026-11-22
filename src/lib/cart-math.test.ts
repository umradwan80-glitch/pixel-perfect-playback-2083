import { describe, it, expect } from "vitest";
import { addLine, setQty, cartTotal } from "./cart-math";
import { getProduct } from "@/data/products";

describe("cart", () => {
  it("adding the same item twice increases quantity", () => {
    expect(addLine(addLine([], "espresso"), "espresso")).toEqual([{ id: "espresso", qty: 2 }]);
  });
  it("decreasing to zero removes the item", () => {
    expect(setQty([{ id: "espresso", qty: 1 }], "espresso", 0)).toEqual([]);
  });
  it("total in SAR sums price × quantity", () => {
    const lines = [{ id: "espresso", qty: 2 }, { id: "tiramisu", qty: 1 }];
    expect(cartTotal(lines, (id) => getProduct(id)?.price)).toBe(48);
  });
});
