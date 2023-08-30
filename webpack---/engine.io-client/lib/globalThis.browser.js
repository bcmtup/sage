module.exports = (function() {
    if (typeof self !== 'undefined') {
        return self;
    } else if (typeof window !== 'undefined') {
        return window;
    } else {
        return Function('return this')(); // eslint-disable-line no-new-func
    }
})();



//////////////////
// WEBPACK FOOTER
// ./~/engine.io-client/lib/globalThis.browser.js
// module id = 18
// module chunks = 0