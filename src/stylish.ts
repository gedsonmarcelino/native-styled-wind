import CSS_TAILWIND from "./styles";

const CSS_CUSTOM = {
  "border-0": "border-width: 0px",
  "border-2": "border-width: 2px",
  "border-4": "border-width: 4px",
  "border-8": "border-width: 8px",
  border: "border-width: 1px",

  "rounded-md": "border-radius: 6px",
  "rounded-lg": "border-radius: 8px",
  "rounded-xl": "border-radius: 12px",
  "rounded-2xl": "border-radius: 16px",

  "text-center": "text-align: center",

  "font-normal": "font-weight: normal",
  "font-bold": "font-weight: bold",

  "mr-3": "margin-right: 12px",
  "mb-2": "margin-bottom: 8px",
  "mb-4": "margin-bottom: 16px",
  "mb-5": "margin-bottom: 20px",

  "p-3": "padding: 12px",
  "p-4": "padding: 16px",

  "pb-3": "padding-bottom: 8px",

  "py-2.5": "padding-top: 10px padding-bottom: 10px",

  "px-3": "padding-left: 8px padding-right: 8px",
  "px-4": "padding-left: 16px padding-right: 16px",

  "w-full": "width: 100%",

  "top-7": "top: 14px",
  "left-5": "left: 10px",

  "w-{72}": "width: 72px",
  "w-{250}": "width: 250px",
  "h-{72}": "height: 72px",

  "text-black": "color: #000000",
  "text-secondary": "color: #EFE3C8",
  "text-secondary-dark": "color: #88776F",

  "bg-primary-light": "background-color: #362C36",
  "bg-primary-dark": "background-color: #171017",
  "bg-secondary": "background-color: #EFE3C8",

  "border-secondary": "border-color: #EFE3C8",
  "border-secondary-dark": "border-color: #88776F",
};

const CSS = { ...CSS_TAILWIND, ...CSS_CUSTOM } as any;

export function stylish(props: any) {
  const styles =
    props?.styles?.split(" ").filter((value: string) => value) || [];
  // console.log("styles", styles);

  const result = styles.reduce((prev: string, cur: string) => {
    return prev + " " + CSS[cur] + ";";
  }, "");

  // console.log("result", result);
  return result;
}
