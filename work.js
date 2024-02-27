addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  if (url.pathname == "/" && url.search == "") {
    url.href="http://ipv4.download.thinkbroadband.com/512MB.zip"
    let request = new Request(url, event.request);
    event.respondWith(fetch(request));
  }
})
