# vanilla-html

## Example:

Create Elements like JSX:

```js
import html from "vanilla-html";

const { gourp } = html`
  <div ref="group">
    <div>hello group</div>
    <div>sub group</div>
  </div>
`;

const { root, btn } = html`
  <div ref="root">
    <h1>hello</h1>
    ${group}
    <button ref="btn" onclick=${() => console.log("hello")}></button>
  </div>
`;

console.log(root);
console.log(btn);

document.body.append(root);
```
