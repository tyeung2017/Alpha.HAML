const handlers = require('./handlers');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handleHome(response);
  } else if (url.indexOf('/auto') !== -1) {
    handlers.handleAuto(request, response);
  } else if (url.indexOf('/index.js') !== -1) {
    handlers.handleIndex(request, response);
  } else if (url.indexOf('/main.css') !== -1) {
    handlers.handleCSS(request, response);
  // } else if (url.indexOf('/favicon.ico') !== -1) {
  //   handlers.handleFavicon(request, response);
  } else if (url.indexOf('/assets' === 0)) {
    console.log(url)
    handlers.handleImages(response, url);
  } else {
    response.writeHead(404, "Content-Type:text/html");
    response.end("<h1>Heather fucked up</h1>");
  }
}

module.exports = router;
