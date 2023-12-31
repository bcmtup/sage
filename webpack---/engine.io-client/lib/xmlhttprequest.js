// browser shim for xmlhttprequest module

var hasCORS = require('has-cors');
var globalThis = require('./globalThis');

module.exports = function(opts) {
    var xdomain = opts.xdomain;

    // scheme must be same when usign XDomainRequest
    // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
    var xscheme = opts.xscheme;

    // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
    // https://github.com/Automattic/engine.io-client/pull/217
    var enablesXDR = opts.enablesXDR;

    // XMLHttpRequest can be disabled on IE
    try {
        if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
        }
    } catch (e) {}

    // Use XDomainRequest for IE8 if enablesXDR is true
    // because loading bar keeps flashing when using jsonp-polling
    // https://github.com/yujiosaka/socke.io-ie8-loading-example
    try {
        if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
            return new XDomainRequest();
        }
    } catch (e) {}

    if (!xdomain) {
        try {
            return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
        } catch (e) {}
    }
};



//////////////////
// WEBPACK FOOTER
// ./~/engine.io-client/lib/xmlhttprequest.js
// module id = 16
// module chunks = 0