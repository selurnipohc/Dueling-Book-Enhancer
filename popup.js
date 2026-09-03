"use strict";

document.getElementById("open-settings").addEventListener("click", function open() {
  chrome.runtime.openOptionsPage();
  window.close();
});
