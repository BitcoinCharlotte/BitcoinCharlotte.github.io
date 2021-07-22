require('../css/app.scss');

require('jquery')
require('bootstrap')

// Syntax highlighting for code.
// var hljs = require('highlightjs')
// hljs.initHighlightingOnLoad();

// Redirects for qr codes and links so we can track marketing.
var pathname = window.location.pathname; // Returns path only (/path/example.html)
alert(pathname);
pathname === '/connect' ? window.location.assign('https://bitcoincharlotte.org/') : '';
pathname === '/qr-foam-board1' ? window.location.assign('https://bitcoincharlotte.org/') : '';
