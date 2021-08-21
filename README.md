# vanilla-html

Onliy use string build template innerHTML

```js
import { html } from "vanilla-html";

export const App = () => {
  const div = html`
    <div>
      <button class="btn">Click Me</button>
    </div>
  `;

  const btn = div.querySelector < HTMLButtonElement > "button";
  btn.onclick = () => {
    btn.innerHTML += "1";
  };
  return div;
};

document.body.append(App());
```
