/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(10);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

__webpack_require__(0);

__webpack_require__(3);

var _Router = __webpack_require__(4);

var _Router2 = _interopRequireDefault(_Router);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _homepage = __webpack_require__(7);

var _homepage2 = _interopRequireDefault(_homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("ready!");
/*———————————————————————————————————*\
    $ LIBRAIRIES
\*———————————————————————————————————*/


/*———————————————————————————————————*\
    $ PAGES
\*———————————————————————————————————*/


/*———————————————————————————————————*\
    $ ROUTER
\*———————————————————————————————————*/ /*
                                        <body class="homepage">
                                        */
var routes = new _Router2.default({
    // Commun
    common: _common2.default,
    // Toutes les autres pages
    homepage: _homepage2.default
});

/*———————————————————————————————————*\
        $ XHR ICONS
\*———————————————————————————————————*/
var __svg__ = { filename: __webpack_require__.p +"images/spriteXHR.svg" };
__svg__ = { filename: 'public/images/spriteXHR.svg' };

__webpack_require__(9)(__svg__);

// Load Events
// eslint-disable-next-line rule
jQuery(document).ready(function () {
    return routes.loadEvents();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("lib/unelib.js");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camelCase = __webpack_require__(5);

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */
var Router = function () {

  /**
   * Create a new Router
   * @param {Object} routes
   */
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }

  /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */


  _createClass(Router, [{
    key: 'fire',
    value: function fire(route) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var arg = arguments[2];

      var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';
      if (fire) {
        this.routes[route][event](arg);
      }
    }

    /**
     * Automatically load and fire Router events
     *
     * Events are fired in the following order:
     *  * common init
     *  * page-specific init
     *  * page-specific finalize
     *  * common finalize
     */

  }, {
    key: 'loadEvents',
    value: function loadEvents() {
      var _this = this;

      // Fire common init JS
      this.fire('common');

      // Fire page-specific init JS, and then finalize JS
      document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase2.default).forEach(function (className) {
        _this.fire(className);
        _this.fire(className, 'finalize');
      });

      // Fire common finalize JS
      this.fire('common', 'finalize');
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
exports.default = function (str) {
  return '' + str.charAt(0).toLowerCase() + str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return '' + part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(1);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*———————————————————————————————————*\
    $ IMPORTS
\*———————————————————————————————————*/
exports.default = {
  init: function init() {
    console.log('Je suis dans toutes les pages');
  },
  finalize: function finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(8);

var navbar = _interopRequireWildcard(_navbar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  init: function init() {
    // JS déclanché en premier
    // Appel des fonctions provenant des composants
    navbar.open();
    // Code perso
    console.log('Je suis dans la Homepage');
  },
  finalize: function finalize() {
    // JS déclanché après le JS du init()
  }
}; /*———————————————————————————————————*\
       $ IMPORTS
   \*———————————————————————————————————*/

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;
// Création d'une fonction pour le composant : "navbar"
function open() {}
// Code de la fonction


// Autres fonctions ...

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Load svg via ajax
 * @param  {string} url path to svg sprite
 * @generator: webpack-svgstore-plugin
 * @see: https://www.npmjs.com/package/webpack-svgstore-plugin
 * @return {[type]}     [description]
 */
var svgXHR = function(options) {
  var url = false;
  var baseUrl = undefined;

  options && options.filename ? (url = options.filename) : null;

  if (!url) return false;
  var _ajax = new XMLHttpRequest();
  var _fullPath;

  if (typeof XDomainRequest !== 'undefined') {
    _ajax = new XDomainRequest();
  }

  if (typeof baseUrl === 'undefined') {
    if (typeof window.baseUrl !== 'undefined') {
      baseUrl = window.baseUrl;
    } else {
      baseUrl =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '');
    }
  }

  _fullPath = (baseUrl + '/' + url).replace(/([^:]\/)\/+/g, '$1');
  _ajax.open('GET', _fullPath, true);
  _ajax.onprogress = function() {};
  _ajax.onload = function() {
    if (!_ajax.responseText || _ajax.responseText.substr(0, 4) !== '<svg') {
      throw Error('Invalid SVG Response');
    }
    if (_ajax.status < 200 || _ajax.status >= 300) {
      return;
    }
    var div = document.createElement('div');
    div.innerHTML = _ajax.responseText;

    domready(function() {
      document.body.insertBefore(div, document.body.childNodes[0]);
    });
  };
  _ajax.send();
};

/**
 * jQuery like $.ready function.
 *
 * @param {Function} fn
 * @return void
 */
function domready(callback) {
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

module.exports = svgXHR;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map