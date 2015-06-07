var jsdom = require("jsdom");

var PAGE = '<html><head></head><body><div id="divOnPage">Typeahead is awesome</div></body></html>';

exports.onPage = function(testFunc) {
    jsdom.env(PAGE, [],
        function (errors, window) {
            if (!window.navigator) {
                window.navigator = {
                    userAgent: 'JasmineTest'
                };
            }
            require("window-handle").setWindow(window);
            testFunc(window);
        }
    );    
}