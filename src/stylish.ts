import CSS_TAILWIND from "./styles";
import CSS_CUSTOM from "./custom";
import { getValueIntoBrackets, hasBrackets } from "./utils";

const CSS = { ...CSS_TAILWIND, ...CSS_CUSTOM } as any;

export function stylish(props: any) {
  const styles =
    props?.styles?.split(" ").filter((value: string) => value) || [];
  // console.log("styles", styles);

  const result = styles.reduce((previous: string, current: string) => {
    const match = hasBrackets(current);
    if (match) {
      const { key, value } = getValueIntoBrackets(match);
      return `${previous} ${CSS[key].replace(/\{value\}/g, value)};`;
    }

    return `${previous} ${CSS[current]};`;
  }, "");

  // console.log("result", result);
  return result;
}
