// =====================================================================
// Very simple client-side password gate.
//
// IMPORTANT: this is NOT real security. Anyone who looks at this file's
// source code (view-source) can read the password. It only prevents
// casual visitors from seeing the content — it will not stop someone
// who is determined to bypass it. Do not put confidential material
// behind this alone.
// =====================================================================

// 1) Change this to whatever password you want to use.
const SITE_PASSWORD = "biodiversity2026";

// 2) Choose how long the site "remembers" a correct password:
//    - sessionStorage: asks again every time the browser is closed/reopened
//    - localStorage:   remembers on that device until manually cleared
const storage = window.sessionStorage; // change to window.localStorage if preferred

const STORAGE_KEY = "site_unlocked";

function unlockSite() {
  document.getElementById("password-overlay").style.display = "none";
  document.getElementById("site-content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  if (storage.getItem(STORAGE_KEY) === "true") {
    unlockSite();
    return;
  }

  const input = document.getElementById("password-input");
  const button = document.getElementById("password-submit");
  const error = document.getElementById("password-error");

  function tryUnlock() {
    if (input.value === SITE_PASSWORD) {
      storage.setItem(STORAGE_KEY, "true");
      unlockSite();
    } else {
      error.style.display = "block";
      input.value = "";
      input.focus();
    }
  }

  button.addEventListener("click", tryUnlock);
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") tryUnlock();
  });
});
