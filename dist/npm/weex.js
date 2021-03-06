(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function () {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/            i: moduleId,
                /******/            l: false,
                /******/            exports: {}
                /******/
            };
            /******/
            /******/ 		// Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }

        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ 	// identity function for calling harmony imports with the correct context
        /******/
        __webpack_require__.i = function (value) {
            return value;
        };
        /******/
        /******/ 	// define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/                configurable: false,
                    /******/                enumerable: true,
                    /******/                get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/            function getDefault() {
                    return module['default'];
                } :
                /******/            function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ 	// __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 10);
        /******/
    })
    /************************************************************************/
    /******/([
        /* 0 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            module.exports = {
                type: function type(ob) {
                    return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
                },
                isObject: function isObject(ob, real) {
                    if (real) {
                        return this.type(ob) === "object";
                    } else {
                        return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
                    }
                },
                isFormData: function isFormData(val) {
                    return typeof FormData !== 'undefined' && val instanceof FormData;
                },
                trim: function trim(str) {
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                },
                encode: function encode(val) {
                    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
                },
                formatParams: function formatParams(data) {
                    var arr = [];
                    for (var name in data) {
                        var value = data[name];
                        if (this.isObject(value)) {
                            value = JSON.stringify(value);
                        }
                        arr.push(this.encode(name) + "=" + this.encode(value));
                    }
                    return arr.join("&");
                },


                // Do not overwrite existing attributes
                merge: function merge(a, b) {
                    for (var key in b) {
                        if (!a.hasOwnProperty(key)) {
                            a[key] = b[key];
                        } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                            this.merge(a[key], b[key]);
                        }
                    }
                    return a;
                }
            };

            /***/
        }),
        /* 1 */
        /***/ (function (module, exports, __webpack_require__) {

            function KEEP(_, cb) {
                cb();
            }

            "use strict";

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /*
             * author: wendu
             * email: 824783146@qq.com
             **/

            var util = __webpack_require__(0);
            var isBrowser = typeof document !== "undefined";

//EngineWrapper can help  generating  a  http engine quickly through a adapter
            function EngineWrapper(adapter) {
                var AjaxEngine = function () {
                    function AjaxEngine() {
                        _classCallCheck(this, AjaxEngine);

                        this.requestHeaders = {};
                        this.readyState = 0;
                        this.timeout = 0; // 0 stands for no timeout
                        this.responseURL = "";
                        this.responseHeaders = {};
                    }

                    _createClass(AjaxEngine, [{
                        key: "_call",
                        value: function _call(name) {
                            this[name] && this[name].apply(this, [].splice.call(arguments, 1));
                        }
                    }, {
                        key: "_changeReadyState",
                        value: function _changeReadyState(state) {
                            this.readyState = state;
                            this._call("onreadystatechange");
                        }
                    }, {
                        key: "open",
                        value: function open(method, url) {
                            this.method = method;
                            if (!url) {
                                url = location.href;
                            } else {
                                url = util.trim(url);
                                if (url.indexOf("http") !== 0) {
                                    // Normalize the request url
                                    if (isBrowser) {
                                        var t = document.createElement("a");
                                        t.href = url;
                                        url = t.href;
                                    }
                                }
                            }
                            this.responseURL = url;
                            this._changeReadyState(1);
                        }
                    }, {
                        key: "send",
                        value: function send(arg) {
                            var _this = this;

                            arg = arg || null;
                            if (isBrowser) {
                                var cookie = document.cookie;
                                if (cookie) {
                                    this.requestHeaders.cookie = cookie;
                                }
                            }
                            var self = this;
                            if (adapter) {
                                var request = {
                                    method: self.method,
                                    url: self.responseURL,
                                    headers: self.requestHeaders || {},
                                    body: arg
                                };
                                util.merge(request, self._options || {});
                                if (request.method === "GET") {
                                    request.body = null;
                                }
                                self._changeReadyState(3);
                                var timer;
                                self.timeout = self.timeout || 0;
                                if (self.timeout > 0) {
                                    timer = setTimeout(function () {
                                        if (self.readyState === 3) {
                                            _this._call("onloadend");
                                            self._changeReadyState(0);
                                            self._call("ontimeout");
                                        }
                                    }, self.timeout);
                                }
                                request.timeout = self.timeout;
                                adapter(request, function (response) {

                                    function getAndDelete(key) {
                                        var t = response[key];
                                        delete response[key];
                                        return t;
                                    }

                                    // If the request has already timeout, return
                                    if (self.readyState !== 3) return;
                                    clearTimeout(timer);

                                    // Make sure the type of status is integer
                                    self.status = getAndDelete("statusCode") - 0;

                                    var responseText = getAndDelete("responseText");
                                    var statusMessage = getAndDelete("statusMessage");

                                    // Network error, set the status code 0
                                    if (!self.status) {
                                        self.statusText = responseText;
                                        self._call("onerror", {msg: statusMessage});
                                    } else {
                                        // Parsing the response headers to array in a object,  because
                                        // there may be multiple values with the same header name
                                        var responseHeaders = getAndDelete("headers");
                                        var headers = {};
                                        for (var field in responseHeaders) {
                                            var value = responseHeaders[field];
                                            var key = field.toLowerCase();
                                            // Is array
                                            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                                                headers[key] = value;
                                            } else {
                                                headers[key] = headers[key] || [];
                                                headers[key].push(value);
                                            }
                                        }
                                        var cookies = headers["set-cookie"];
                                        if (isBrowser && cookies) {
                                            cookies.forEach(function (e) {
                                                // Remove the http-Only property of the  cookie
                                                // so that JavaScript can operate it.
                                                document.cookie = e.replace(/;\s*httpOnly/ig, "");
                                            });
                                        }
                                        self.responseHeaders = headers;
                                        // Set the fields of engine from response
                                        self.statusText = statusMessage || "";
                                        self.response = self.responseText = responseText;
                                        self._response = response;
                                        self._changeReadyState(4);
                                        self._call("onload");
                                    }
                                    self._call("onloadend");
                                });
                            } else {
                                console.error("Ajax require adapter");
                            }
                        }
                    }, {
                        key: "setRequestHeader",
                        value: function setRequestHeader(key, value) {
                            this.requestHeaders[util.trim(key)] = value;
                        }
                    }, {
                        key: "getResponseHeader",
                        value: function getResponseHeader(key) {
                            return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
                        }
                    }, {
                        key: "getAllResponseHeaders",
                        value: function getAllResponseHeaders() {
                            var str = "";
                            for (var key in this.responseHeaders) {
                                str += key + ":" + this.getResponseHeader(key) + "\r\n";
                            }
                            return str || null;
                        }
                    }, {
                        key: "abort",
                        value: function abort(msg) {
                            this._changeReadyState(0);
                            this._call("onerror", {msg: msg});
                            this._call("onloadend");
                        }
                    }], [{
                        key: "setAdapter",
                        value: function setAdapter(requestAdapter) {
                            adapter = requestAdapter;
                        }
                    }]);

                    return AjaxEngine;
                }();

                return AjaxEngine;
            }

// learn more about keep-loader: https://github.com/wendux/keep-loader
            ;
            module.exports = EngineWrapper;

            /***/
        }),
        /* 2 */
        /***/ (function (module, exports, __webpack_require__) {

            function KEEP(_, cb) {
                cb();
            }

            "use strict";

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var utils = __webpack_require__(0);
            var isBrowser = typeof document !== "undefined";

            var Fly = function () {
                function Fly(engine) {
                    _classCallCheck(this, Fly);

                    this.engine = engine || XMLHttpRequest;
                    this.interceptors = {
                        response: {
                            use: function use(handler, onerror) {
                                this.handler = handler;
                                this.onerror = onerror;
                            }
                        },
                        request: {
                            use: function use(handler) {
                                this.handler = handler;
                            }
                        }
                    };
                    this.config = {
                        method: "GET",
                        baseURL: "",
                        headers: {},
                        timeout: 0,
                        parseJson: true, // Convert response data to JSON object automatically.
                        withCredentials: false
                    };
                }

                _createClass(Fly, [{
                    key: "request",
                    value: function request(url, data, options) {
                        var _this = this;

                        var engine = new this.engine();
                        var contentType = "Content-Type";
                        var contentTypeLowerCase = contentType.toLowerCase();
                        var promise = new Promise(function (resolve, reject) {
                            options = options || {};
                            options.headers = options.headers || {};
                            utils.merge(options, _this.config);
                            var headers = options.headers;
                            headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || 'application/x-www-form-urlencoded';
                            delete headers[contentTypeLowerCase];
                            var rqi = _this.interceptors.request;
                            var rpi = _this.interceptors.response;
                            options.body = data || options.body;
                            url = utils.trim(url || "");
                            options.method = options.method.toUpperCase();
                            options.url = url;
                            if (rqi.handler) {
                                options = rqi.handler(options, Promise) || options;
                            }

                            function isPromise(p) {
                                // some  polyfill implementation of Promise may be not standard,
                                // so, we test by duck-typing
                                return p.then && p.catch;
                            }

                            if (isPromise(options)) {
                                options.then(function (d) {
                                    resolve(d);
                                }, function (err) {
                                    reject(err);
                                });
                                return;
                            }
                            // Normalize the request url
                            url = utils.trim(options.url);
                            var baseUrl = utils.trim(options.baseURL || "");
                            if (!url && isBrowser && !baseUrl) url = location.href;
                            if (url.indexOf("http") !== 0) {
                                var isAbsolute = url[0] === "/";
                                if (!baseUrl && isBrowser) {
                                    var arr = location.pathname.split("/");
                                    arr.pop();
                                    baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                                }
                                if (baseUrl[baseUrl.length - 1] !== "/") {
                                    baseUrl += "/";
                                }
                                url = baseUrl + (isAbsolute ? url.substr(1) : url);
                                if (isBrowser) {

                                    // Normalize the url which contains the ".." or ".", such as
                                    // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                                    var t = document.createElement("a");
                                    t.href = url;
                                    url = t.href;
                                }
                            }

                            var responseType = utils.trim(options.responseType || "");
                            engine.withCredentials = !!options.withCredentials;
                            var isGet = options.method === "GET";
                            if (isGet) {
                                if (options.body) {
                                    if (utils.type(options.body) !== "string") {
                                        data = utils.formatParams(options.body);
                                    }
                                    url += (url.indexOf("?") === -1 ? "?" : "&") + data;
                                }
                            }
                            engine.open(options.method, url);

                            // try catch for ie >=9
                            try {
                                engine.timeout = options.timeout || 0;
                                if (responseType !== "stream") {
                                    engine.responseType = responseType;
                                }
                            } catch (e) {
                            }

                            // If the request data is json object, transforming it  to json string,
                            // and set request content-type to "json". In browser,  the data will
                            // be sent as RequestBody instead of FormData
                            if (!utils.isFormData(options.body) && ["object", "array"].indexOf(utils.type(options.body)) !== -1) {
                                options.headers[contentType] = 'application/json;charset=utf-8';
                                data = JSON.stringify(options.body);
                            }

                            for (var k in options.headers) {
                                if (k === contentType && (utils.isFormData(options.body) || !options.body || isGet)) {
                                    // Delete the content-type, Let the browser set it
                                    delete options.headers[k];
                                } else {
                                    try {
                                        // In browser environment, some header fields are readonly,
                                        // write will cause the exception .
                                        engine.setRequestHeader(k, options.headers[k]);
                                    } catch (e) {
                                    }
                                }
                            }

                            function onresult(handler, data, type) {
                                if (handler) {
                                    //如果失败，添加请求信息
                                    if (type) {
                                        data.request = options;
                                    }
                                    // Call response interceptor
                                    data = handler.call(rpi, data, Promise) || data;
                                }
                                if (!isPromise(data)) {
                                    data = Promise[type === 0 ? "resolve" : "reject"](data);
                                }
                                data.then(function (d) {
                                    resolve(d);
                                }).catch(function (e) {
                                    reject(e);
                                });
                            }

                            function onerror(e) {
                                e.engine = engine;
                                onresult(rpi.onerror, e, -1);
                            }

                            function Err(msg, status) {
                                this.message = msg;
                                this.status = status;
                            }

                            engine.onload = function () {
                                // The xhr of IE9 has not response filed
                                var response = engine.response || engine.responseText;
                                if (options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                                    // Some third engine implementation may transform the response text to json object automatically,
                                    // so we should test the type of response before transforming it
                                    && !utils.isObject(response)) {
                                    response = JSON.parse(response);
                                }
                                var headers = {};
                                var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                                items.pop();
                                items.forEach(function (e) {
                                    var key = e.split(":")[0];
                                    headers[key] = engine.getResponseHeader(key);
                                });
                                var status = engine.status;
                                var statusText = engine.statusText;
                                var data = {data: response, headers: headers, status: status, statusText: statusText};
                                // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                                utils.merge(data, engine._response);
                                if (status >= 200 && status < 300 || status === 304) {
                                    data.engine = engine;
                                    data.request = options;
                                    onresult(rpi.handler, data, 0);
                                } else {
                                    var e = new Err(statusText, status);
                                    e.response = data;
                                    onerror(e);
                                }
                            };

                            engine.onerror = function (e) {
                                onerror(new Err(e.msg || "Network Error", 0));
                            };

                            engine.ontimeout = function () {
                                onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                            };
                            engine._options = options;
                            setTimeout(function () {
                                engine.send(isGet ? null : data);
                            }, 0);
                        });
                        promise.engine = engine;
                        return promise;
                    }
                }, {
                    key: "all",
                    value: function all(promises) {
                        return Promise.all(promises);
                    }
                }, {
                    key: "spread",
                    value: function spread(callback) {
                        return function (arr) {
                            return callback.apply(null, arr);
                        };
                    }
                }]);

                return Fly;
            }();

            ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
                Fly.prototype[e] = function (url, data, option) {
                    return this.request(url, data, utils.merge({method: e}, option));
                };
            });
// Learn more about keep-loader: https://github.com/wendux/keep-loader
            ;
            module.exports = Fly;

            /***/
        }),
        /* 3 */,
        /* 4 */,
        /* 5 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


//weex adapter
            var stream = weex.requireModule('stream');
            module.exports = function (request, responseCallback) {
                if (!request.body) {
                    delete request.body;
                }
                stream.fetch(request, function (res) {
                    if (res.ok) {
                        responseCallback({
                            statusCode: res.status,
                            responseText: res.data,
                            headers: res.headers,
                            statusMessage: res.statusText
                        });
                    } else {
                        responseCallback({
                            statusCode: res.status || 0,
                            statusMessage: res.statusText
                        });
                    }
                });
            };

            /***/
        }),
        /* 6 */,
        /* 7 */,
        /* 8 */,
        /* 9 */,
        /* 10 */
        /***/ (function (module, exports, __webpack_require__) {

            "use strict";


//weex entry
            var Fly = __webpack_require__(2);
            var EngineWrapper = __webpack_require__(1);
            var adapter = __webpack_require__(5);
            var weexEngine = EngineWrapper(adapter);
            module.exports = function (engine) {
                return new Fly(engine || weexEngine);
            };

            /***/
        })
        /******/]);
});