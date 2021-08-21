// 拼接string
export const templateFn = function (...args: any[]): {
  out: string;
  eles?: { [key: string]: HTMLElement };
} {
  if (args.length > 1) {
    const [str, ...rest] = args;
    let out = "";
    let eleNum = 0;
    const eles: { [key: string]: HTMLElement } = {};
    str.forEach((v: string, i: number) => {
      out += v;
      const ri = rest[i];
      if (typeof ri === "object") {
        eleNum += 1;
        out += `<span va-html="v${eleNum}" style=all:unset></span>`;
        eles[eleNum] = ri;
      } else if (ri) {
        out += ri;
      }
    });

    return { out, eles };
  }
  if (typeof args[0] === "string") {
    return { out: args[0] };
  }

  if (args[0]) {
    return { out: args[0].join("") };
  }

  return { out: "" };
};

export function html(...args: any[]): HTMLElement {
  const div = document.createElement("template");
  const { out, eles } = templateFn(...args);
  console.log(out, eles);
  div.innerHTML = out;
  const ele = div.content.firstElementChild as HTMLElement;
  if (eles) {
    Object.keys(eles).forEach((k) => {
      const sub = ele.querySelector(`[va-html="v${k}"]`);
      console.log(k, sub);
      if (sub) {
        sub.replaceWith((eles as any)[k]);
        // ele.replaceChild(sub, (eles as any)[k]);
      }
    });
  }
  return ele;
}
