
let lang = navigator.language.startsWith('fr') ? 'fr' : 'en';
const tr = {};

function loadLang(callback) {
  fetch(lang + ".json")
    .then(res => res.json())
    .then(data => {
      Object.assign(tr, data);
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (tr[key]) el.innerText = tr[key];
      });
      if (callback) callback();
    });
}

function switchLang(l) {
  lang = l;
  loadLang();
}
