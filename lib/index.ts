// 拼接string
export const templateFn = function (...args: any[]): string {
  if (args.length > 1) {
    const [str, ...rest] = args;
    let out = "";

    str.forEach((v: string, i: number) => {
      out += v;
      if (rest[i]) {
        if (Array.isArray(rest[i])) {
          out += rest[i].join("");
        } else {
          out += rest[i];
        }
      }
    });

    return out;
  }
  if (typeof args[0] === "string") {
    return args[0];
  }

  if (args[0]) {
    return args[0].join("");
  }

  return "";
};

export function html(...args: any[]): HTMLElement {
  const div = document.createElement("template");
  div.innerHTML = templateFn(...args);
  return div.content.firstElementChild as any;
}
