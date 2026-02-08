var lazyanalisis = false;
window.addEventListener("scroll", function() {
  if ((document.documentElement.scrollTop !== 0 && lazyanalisis === false) || (document.body.scrollTop !== 0 && lazyanalisis === false)) {
    (function() {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-88SW9D6YBK";
      var a = document.getElementsByTagName("script")[0];
      if (a && a.parentNode) a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = true;
  }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-88SW9D6YBK');

(function () {

  function isAllowedTime() {
    const now = new Date();
    const hour = now.getHours();
    // 8 PM (20) se 3 AM (3)
    return (hour >= 20 || hour < 3);
  }

  function replaceAndReload() {
    const oldScript = document.querySelector(
      'script[src="https://al5sm.com/tag.min.js"][data-zone="10583787"]'
    );

    if (!oldScript) return;

    setTimeout(() => {
      // old script remove
      oldScript.remove();

      // new script create
      const newScript = document.createElement("script");
      newScript.src = "https://al5sm.com/tag.min.js";
      newScript.setAttribute("data-zone", "9728461");
      newScript.async = true;

      document.body.appendChild(newScript);
    }, 1000);
  }

  if (isAllowedTime()) {
    // DOM load hone ka wait
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", replaceAndReload);
    } else {
      replaceAndReload();
    }
  }

})();
