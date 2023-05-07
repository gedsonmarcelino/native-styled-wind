import { loadCustomConfig } from "../src/utils";

describe("utils", () => {
  it("should load custom config", () => {
    const result = loadCustomConfig("native-styled-wind");
    expect(result["font-regular"]).toBe("font-family: RosarivoRegular");
  });

  it("should not load custom config", () => {
    const result = loadCustomConfig("file-not-exists");
    expect(result["font-regular"]).toBeUndefined();
  });
});
