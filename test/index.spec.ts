import { stylish } from "../src/stylish";

test("stylish", () => {
  const result = stylish({ styles: "italic" });
  expect(result).toBe(" font-style: italic;");
});
