(function () {
  if (window.__whatrustAradFont) return;
  window.__whatrustAradFont = true;

  const css = `
    @font-face {
      font-family: 'Arad';
      src: local('Arad'), local('Arad Regular');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Arad';
      src: local('Arad Medium');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Arad';
      src: local('Arad Bold'), local('Arad SemiBold');
      font-weight: 600 700;
      font-style: normal;
      font-display: swap;
    }

    /* Force Arad on the main WhatsApp Web UI */
    body,
    #app,
    .app-wrapper-web,
    .selectable-text,
    [dir="rtl"],
    [dir="auto"],
    span, div, p, pre, input, textarea {
      font-family: "Arad", "Vazirmatn", "Tahoma", "Segoe UI", sans-serif !important;
    }
  `;

  const style = document.createElement('style');
  style.id = 'whatrust-arad-font';
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
