export function hasBrackets(str: string) {
  return str.match(/([a-zA-Z-]+)-\{(\d+)\}/);
}

export function getValueIntoBrackets(match: string[]) {
  // console.log("match", match);
  const value = parseInt(match[2], 10);
  const key = match[1] + "-";
  return { key, value };
}

export function loadCustomConfig() {
  try {
    const customConfig = require("../../../native-styled-wind.json");
    if (customConfig) {
      return customConfig;
    }
  } catch (error) {
    console.log("error :>> ", error);
  }

  return {};
}
