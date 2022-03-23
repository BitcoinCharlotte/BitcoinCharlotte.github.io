require('../css/app.scss');

require('jquery')
require('bootstrap')

// Syntax highlighting for code.
// var hljs = require('highlightjs')
// hljs.initHighlightingOnLoad();

// Redirects for qr codes and links so we can track marketing.
var pathname = window.location.pathname; // Returns path only (/path/example.html)
window.onload = function() {
	pathname === '/qr-event-flier1' ? window.location.href = '/events' : ''; // Why Kids Need Bitcoin. Isaiah Jackson
	pathname === '/qr-event-flier2' ? window.location.href = '/events' : ''; // What is Money? David Seroy Flier
	pathname === '/qr-foam-board1' ? window.location.href = '/' : ''; // Bitcoin Charlotte foam baords
	pathname === '/qr-dot-org' ? window.location.href = '/about' : ''; // 
	pathname === '/b4b' ? window.location.href = '/B4B' : ''; // 
}
