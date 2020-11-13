(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    // export a function from a file
    var helloWorldFunction = function helloWorldFunction() {
      console.log("Hello, world!");
    };

    // import specific classes or functions from a file - useful for importing from external libraries
    helloWorldFunction();

})));
