type ClickHandler = () => void;

export function dom(clickHandler: ClickHandler) {
  const div = document.createElement("div");
  div.innerText = "Some div";
  div.classList.add("app");

  const btn = document.createElement("button");
  btn.innerText = "Click me";
  btn.onclick = clickHandler;

  div.appendChild(btn);

  document.body.appendChild(div);
}
