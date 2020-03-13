import htm from "htm";

function h(tag: any, props: any, ...children: any[]) {
  return {
    __token: true,
    tag,
    props: props || {},
    children,
    key: (props && props.key) || null
  };
}

export function isElement(obj: any) {
  return Object.prototype.toString.call(obj).indexOf("lement") > 0;
}

export const htmlParser = htm.bind(h);

const html = <T extends HTMLElement>(
  str: TemplateStringsArray,
  ...values: any[]
): { [key: string]: T } => {
  let token: any = htmlParser(str, ...values);
  const tree = {
    __tree: true as any
  } as { [key: string]: T };

  function addTree(node: any) {
    if (isElement(node)) {
      return node;
    }
    const ele = document.createElement(node.tag);

    // set props
    const attrs = Object.keys(node.props);
    attrs.forEach(name => {
      const value = node.props[name];
      if (name === "style" && typeof value === "object") {
        Object.keys(value).forEach(styName => {
          ele.style[styName] = value[styName];
        });
      } else if (typeof value === "function" || typeof value === "object") {
        ele[name] = value;
      } else if (name === "ref") {
        tree[value] = ele;
      } else {
        ele.setAttribute(name, value);
      }
    });

    // set children
    node.children.forEach((child: any) => {
      if (Object.prototype.toString.call(child) === "[object Array]") {
        child.forEach((c: any) => {
          const subChildEle = addTree(c);
          if (subChildEle) {
            ele.appendChild(subChildEle);
          }
        });
      } else if (isElement(child)) {
        ele.appendChild(child);
      } else if (
        typeof child === "string" ||
        typeof child === "boolean" ||
        typeof child === "number"
      ) {
        ele.textContent = child;
      } else {
        const subChildEle = addTree(child);
        if (subChildEle) {
          ele.appendChild(subChildEle);
        }
      }
    });

    return ele;
  }

  if (Object.prototype.toString.call(token) !== "[object Array]") {
    addTree(token);
  } else {
    token.forEach((node: any) => {
      addTree(node);
    });
  }

  return tree;
};

export default html;
