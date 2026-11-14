(function () {
  if (window.__whatrustAradFont) return;
  window.__whatrustAradFont = true;

  const css = `
    @font-face {
      font-family: 'Arad';
      src: local('Arad'), local('Arad Regular'), local('Arad-Regular');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Arad';
      src: local('Arad Bold'), local('Arad-Bold');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Arad';
      src: local('Arad VF'), local('Arad-VF'), local('Arad Variable');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }

    /* Force Arad very aggressively */
    html, body, #app, #app *,
    .app, .app *,
    [data-testid],
    [data-testid] *,
    span, div, p, pre, input, textarea, button {
      font-family: "Arad", "Vazirmatn", "Tahoma", "Segoe UI", sans-serif !important;
    }
  `;

  function inject() {
    let style = document.getElementById('whatrust-arad-font');
    if (!style) {
      style = document.createElement('style');
      style.id = 'whatrust-arad-font';
      (document.head || document.documentElement).appendChild(style);
    }
    style.textContent = css;
  }

  inject();
  document.addEventListener('DOMContentLoaded', inject);
  setInterval(inject, 2000);   // keep re-applying (WhatsApp re-renders a lot)
})();
