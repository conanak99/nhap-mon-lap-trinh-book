! function(e, t, n) {
    var a, o = e.getElementsByTagName(t)[0];
    e.getElementById(n) || ((a = e.createElement(t)).id = n, a.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=1427665520889672", o.parentNode.insertBefore(a, o))
}(document, "script", "facebook-jssdk"),
function(e, t, n, a, o, c, s) {
    e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
        (e[o].q = e[o].q || []).push(arguments)
    }, e[o].l = 1 * new Date, c = t.createElement(n), s = t.getElementsByTagName(n)[0], c.async = 1, c.src = "https://www.google-analytics.com/analytics.js", s.parentNode.insertBefore(c, s)
}(window, document, "script", 0, "ga"), ga("create", "UA-102661813-1", "auto"), ga("send", "pageview"),
    function(e, t, n, a, o, c, s) { e.fbq || (o = e.fbq = function() { o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments) }, e._fbq || (e._fbq = o), o.push = o, o.loaded = !0, o.version = "2.0", o.queue = [], (c = t.createElement(n)).async = !0, c.src = "https://connect.facebook.net/en_US/fbevents.js", (s = t.getElementsByTagName(n)[0]).parentNode.insertBefore(c, s)) }(window, document, "script"), fbq("init", "598240393698367"), fbq("track", "PageView");

fbq('track', 'ViewContent', {
    value: 'Nhập Môn Lập Trình'
});

const shortUrl = "https://goo.gl/Q5BTJS";
const url = "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + shortUrl + "&projection=ANALYTICS_CLICKS&key=AIzaSyA2LEe0I77m4pbloQXce357njClj-Akllk";
const downloadBtns = document.querySelectorAll('.cta-btn.conversion-banner__cta-btn');
fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(res) {
        const number = res.analytics.allTime.longUrlClicks;
        downloadBtns.forEach(function(element) {
            element.innerText = "TẢI SÁCH NGAY (" + parseInt(number) + " LƯỢT TẢI)";

            element.onclick = onclick = function() {
                fbq('trackCustom', 'Download');
            };
        });
    });