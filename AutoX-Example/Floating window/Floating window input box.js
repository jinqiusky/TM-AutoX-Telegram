var window = floaty.window(
  <vertical>
    <input id="input" text="Please enter your name" textSize="16sp" focusable="true" />
    <button id="ok" text="OK" />
  </vertical>
);

window.exitOnClose();

toast("Press and hold the OK key to adjust the position");

window.input.on("key", function (keyCode, event) {
  if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
    window.disableFocus();
    event.consumed = true;
  }
});

window.input.on("touch_down", () => {
  window.requestFocus();
  window.input.requestFocus();
});

window.ok.on("click", () => {
  toast("Fool! " + window.input.text());
  window.disableFocus();
});

window.ok.on("long_click", () => {
  window.setAdjustEnabled(!window.isAdjustEnabled());
});

setInterval(() => { }, 1000);