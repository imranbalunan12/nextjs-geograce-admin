module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\imran\\Desktop\\Minedomain Em\\react-geograce-admin\\pages\\home.js";


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("home", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "sidebar-nav",
        className: "sidebar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sidebar-scroll",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "nav",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "lnr lnr-briefcase"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 25
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Dashboard"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 63
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/home",
                  className: "active",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "lnr lnr-home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 47
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 80
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/investor-relations",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "lnr lnr-heart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 42
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Investor Relations"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 76
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/members",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "lnr lnr-users"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 31
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Members"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/downloadables",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "lnr lnr-download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 37
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Downloadables"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 74
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            className: "breadcrumb",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                  className: "fa fa-users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "active",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "page-header",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Our Business"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content",
                  children: "Geograce Resources Philippines, Inc. was incorporated as La Suerte Gold Mining Corporation on 20 April 1974 primarily to engage in the exploration, exploitation, and development of mineral resources, and to purchase, lease, and otherwise acquire mining claims and concessions where in the Philippines, and to carry on the business of mining, extracting, smelting, treating, and otherwise producing and dealing in metals and minerals of all kinds including all its products and by-products."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "page-header",
              children: "Business Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Global Equities, Inc."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content2",
                  children: "On 16 May 1995, the stockholders approved the realignment of the Company\u2019s main business activities from that of a mining company to that of an investment holding company. The corporate name of \u201CLa Suerte Gold Mining Corporation\u201D was renamed as \u201CGlobal Equities, Inc.\u201D As a holding company, it invested in and/or managed companies engaged in the manufacture of absorbent cotton, personal care products and in the provision of specialized corporate facilities for end-users."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 1
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Articles of Incorporation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  children: "On 20 December 2013, the stockholders approved the following amendments to the Company\u2019s Articles of Incorporation: \u2022 Amendment of Article II \u2013 changing the Company\u2019s primary purpose from a mining company into a holding company. \u2022 Amendment of Article VI \u2013 reducing the number of directors from eleven (11) directors to seven (7) directors."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 1
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "More possible investments"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content4",
                  children: "The foregoing amendments in the Company\u2019s Articles of Incorporation were approved by the SEC on 20 February 2014. In line with its new primary purpose, the Company will be on the continuous lookout for possible investments in other areas of interest while maintaining some of its mining tenements."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "page-header",
              children: "MISSION, VISSION, CORE VALUES"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Company Mission"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content2",
                  children: "To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence        "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 1
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Company Vision"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content3",
                  children: "To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Core Values"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  name: "content4",
                  children: "To deliver investment opportunities, generate valued returns to our stakeholders through commitment to excellence"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-lg btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 6
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Publish Update"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 38
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-sm btn-info",
                    style: {
                      float: 'right'
                    },
                    children: "Update"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-eye",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 16
                    }, this), "Visibility: Public"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 84
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
                      className: "fa fa-calendar-check-o",
                      children: "\xA0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 16
                    }, this), "Published: Immediately"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 10
                  }, this), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    style: {
                      color: 'blue'
                    },
                    children: "edit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 101
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-sm btn-info",
                  style: {
                    float: 'right'
                  },
                  children: "Publish"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJmbG9hdCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDQTtBQUFBLDJCQUNFO0FBQUssUUFBRSxFQUFDLFNBQVI7QUFBQSw4QkFDQTtBQUFLLFVBQUUsRUFBQyxhQUFSO0FBQXNC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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUEyVEQsQzs7Ozs7Ozs7Ozs7QUMvVEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgPGhvbWU+XHJcbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBpZD1cInNpZGViYXItbmF2XCIgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zY3JvbGxcIj5cclxuXHRcdFx0XHRcdDxuYXY+XHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9cIiA+PGkgY2xhc3NOYW1lPVwibG5yIGxuci1icmllZmNhc2VcIj48L2k+IDxzcGFuPkRhc2hib2FyZDwvc3Bhbj48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGkgY2xhc3NOYW1lPVwibG5yIGxuci1ob21lXCI+PC9pPiA8c3Bhbj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2ludmVzdG9yLXJlbGF0aW9uc1wiPjxpIGNsYXNzTmFtZT1cImxuciBsbnItaGVhcnRcIj48L2k+IDxzcGFuPkludmVzdG9yIFJlbGF0aW9uczwvc3Bhbj48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9tZW1iZXJzXCI+PGkgY2xhc3NOYW1lPVwibG5yIGxuci11c2Vyc1wiPjwvaT4gPHNwYW4+TWVtYmVyczwvc3Bhbj48L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9kb3dubG9hZGFibGVzXCI+PGkgY2xhc3NOYW1lPVwibG5yIGxuci1kb3dubG9hZFwiPjwvaT4gPHNwYW4+RG93bmxvYWRhYmxlczwvc3Bhbj48L2E+PC9saT5cdFxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOSBjb2wtc20tb2Zmc2V0LTMgY29sLWxnLTEwIGNvbC1sZy1vZmZzZXQtMiBtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxlbSBjbGFzc05hbWU9XCJmYSBmYS11c2Vyc1wiPjwvZW0+XHJcblx0XHRcdFx0XHRcdDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+SG9tZTwvbGk+XHJcblx0XHRcdFx0XHQ8L29sPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5Ib21lPC9oMT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjxoMz5PdXIgQnVzaW5lc3M8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiID5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRHZW9ncmFjZSBSZXNvdXJjZXMgUGhpbGlwcGluZXMsIEluYy4gd2FzIGluY29ycG9yYXRlZCBhcyBMYSBTdWVydGUgR29sZCBNaW5pbmcgQ29ycG9yYXRpb24gb24gMjAgQXByaWwgMTk3NCBwcmltYXJpbHkgdG8gZW5nYWdlIGluIHRoZSBleHBsb3JhdGlvbiwgZXhwbG9pdGF0aW9uLCBhbmQgZGV2ZWxvcG1lbnQgb2YgbWluZXJhbCByZXNvdXJjZXMsIGFuZCB0byBwdXJjaGFzZSwgbGVhc2UsIGFuZCBvdGhlcndpc2UgYWNxdWlyZSBtaW5pbmcgY2xhaW1zIGFuZCBjb25jZXNzaW9ucyB3aGVyZSBpbiB0aGUgUGhpbGlwcGluZXMsIGFuZCB0byBjYXJyeSBvbiB0aGUgYnVzaW5lc3Mgb2YgbWluaW5nLCBleHRyYWN0aW5nLCBzbWVsdGluZywgdHJlYXRpbmcsIGFuZCBvdGhlcndpc2UgcHJvZHVjaW5nIGFuZCBkZWFsaW5nIGluIG1ldGFscyBhbmQgbWluZXJhbHMgb2YgYWxsIGtpbmRzIGluY2x1ZGluZyBhbGwgaXRzIHByb2R1Y3RzIGFuZCBieS1wcm9kdWN0cy5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dGFyZWE+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1pbmZvXCIgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fSA+UHVibGlzaDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+UHVibGlzaCBVcGRhdGU8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlVwZGF0ZTwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj4mbmJzcDs8L2VtPlZpc2liaWxpdHk6IFB1YmxpYzwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyLWNoZWNrLW9cIj4mbmJzcDs8L2VtPlB1Ymxpc2hlZDogSW1tZWRpYXRlbHk8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiAgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fT5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj4gXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPkJ1c2luZXNzIFByb2ZpbGU8L2gxPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+R2xvYmFsIEVxdWl0aWVzLCBJbmMuPC9oMz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnQyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE9uIDE2IE1heSAxOTk1LCB0aGUgc3RvY2tob2xkZXJzIGFwcHJvdmVkIHRoZSByZWFsaWdubWVudCBvZiB0aGUgQ29tcGFueeKAmXMgbWFpbiBidXNpbmVzcyBhY3Rpdml0aWVzIGZyb20gdGhhdCBvZiBhIG1pbmluZyBjb21wYW55IHRvIHRoYXQgb2YgYW4gaW52ZXN0bWVudCBob2xkaW5nIGNvbXBhbnkuIFRoZSBjb3Jwb3JhdGUgbmFtZSBvZiDigJxMYSBTdWVydGUgR29sZCBNaW5pbmcgQ29ycG9yYXRpb27igJ0gd2FzIHJlbmFtZWQgYXMg4oCcR2xvYmFsIEVxdWl0aWVzLCBJbmMu4oCdIEFzIGEgaG9sZGluZyBjb21wYW55LCBpdCBpbnZlc3RlZCBpbiBhbmQvb3IgbWFuYWdlZCBjb21wYW5pZXMgZW5nYWdlZCBpbiB0aGUgbWFudWZhY3R1cmUgb2YgYWJzb3JiZW50IGNvdHRvbiwgcGVyc29uYWwgY2FyZSBwcm9kdWN0cyBhbmQgaW4gdGhlIHByb3Zpc2lvbiBvZiBzcGVjaWFsaXplZCBjb3Jwb3JhdGUgZmFjaWxpdGllcyBmb3IgZW5kLXVzZXJzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWluZm9cIiBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319PlB1Ymxpc2g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+UHVibGlzaCBVcGRhdGU8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlVwZGF0ZTwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj4mbmJzcDs8L2VtPlZpc2liaWxpdHk6IFB1YmxpYzwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyLWNoZWNrLW9cIj4mbmJzcDs8L2VtPlB1Ymxpc2hlZDogSW1tZWRpYXRlbHk8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiAgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fT5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjxoMz5BcnRpY2xlcyBvZiBJbmNvcnBvcmF0aW9uPC9oMz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE9uIDIwIERlY2VtYmVyIDIwMTMsIHRoZSBzdG9ja2hvbGRlcnMgYXBwcm92ZWQgdGhlIGZvbGxvd2luZyBhbWVuZG1lbnRzIHRvIHRoZSBDb21wYW554oCZcyBBcnRpY2xlcyBvZiBJbmNvcnBvcmF0aW9uOlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx04oCiIEFtZW5kbWVudCBvZiBBcnRpY2xlIElJIOKAkyBjaGFuZ2luZyB0aGUgQ29tcGFueeKAmXMgcHJpbWFyeSBwdXJwb3NlIGZyb20gYSBtaW5pbmcgY29tcGFueSBpbnRvIGEgaG9sZGluZyBjb21wYW55LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx04oCiIEFtZW5kbWVudCBvZiBBcnRpY2xlIFZJIOKAkyByZWR1Y2luZyB0aGUgbnVtYmVyIG9mIGRpcmVjdG9ycyBmcm9tIGVsZXZlbiAoMTEpIGRpcmVjdG9ycyB0byBzZXZlbiAoNykgZGlyZWN0b3JzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWluZm9cIiBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319ID5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2Plx0XHJcblxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjxoMz5QdWJsaXNoIFVwZGF0ZTwvaDM+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fSA+VXBkYXRlPC9idXR0b24+XHRcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiPiZuYnNwOzwvZW0+VmlzaWJpbGl0eTogUHVibGljPC9zcGFuPiZuYnNwOzxhIGhyZWY9XCIjXCIgc3R5bGU9e3tjb2xvcjogICdibHVlJ319ID5lZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQgPGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCA8c3Bhbj48ZW0gY2xhc3NOYW1lPVwiZmEgZmEtY2FsZW5kYXItY2hlY2stb1wiPiZuYnNwOzwvZW0+UHVibGlzaGVkOiBJbW1lZGlhdGVseTwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiICBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319PlB1Ymxpc2g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PiBcclxuXHRcdCAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjxoMz5Nb3JlIHBvc3NpYmxlIGludmVzdG1lbnRzPC9oMz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnQ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRoZSBmb3JlZ29pbmcgYW1lbmRtZW50cyBpbiB0aGUgQ29tcGFueeKAmXMgQXJ0aWNsZXMgb2YgSW5jb3Jwb3JhdGlvbiB3ZXJlIGFwcHJvdmVkIGJ5IHRoZSBTRUMgb24gMjAgRmVicnVhcnkgMjAxNC5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdEluIGxpbmUgd2l0aCBpdHMgbmV3IHByaW1hcnkgcHVycG9zZSwgdGhlIENvbXBhbnkgd2lsbCBiZSBvbiB0aGUgY29udGludW91cyBsb29rb3V0IGZvciBwb3NzaWJsZSBpbnZlc3RtZW50cyBpbiBvdGhlciBhcmVhcyBvZiBpbnRlcmVzdCB3aGlsZSBtYWludGFpbmluZyBzb21lIG9mIGl0cyBtaW5pbmcgdGVuZW1lbnRzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWluZm9cIiBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319ID5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+PGgzPlB1Ymxpc2ggVXBkYXRlPC9oMz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319ID5VcGRhdGU8L2J1dHRvbj5cdFxyXG5cdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQgPGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCA8c3Bhbj48ZW0gY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+Jm5ic3A7PC9lbT5WaXNpYmlsaXR5OiBQdWJsaWM8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1jYWxlbmRhci1jaGVjay1vXCI+Jm5ic3A7PC9lbT5QdWJsaXNoZWQ6IEltbWVkaWF0ZWx5PC9zcGFuPiZuYnNwOzxhIGhyZWY9XCIjXCIgc3R5bGU9e3tjb2xvcjogICdibHVlJ319ID5lZGl0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIgIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0+UHVibGlzaDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+IFxyXG5cdFx0ICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPk1JU1NJT04sIFZJU1NJT04sIENPUkUgVkFMVUVTPC9oMT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+PGgzPkNvbXBhbnkgTWlzc2lvbjwvaDM+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJjb250ZW50MlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0VG8gZGVsaXZlciBpbnZlc3RtZW50IG9wcG9ydHVuaXRpZXMsIGdlbmVyYXRlIHZhbHVlZCByZXR1cm5zIHRvIG91ciBzdGFrZWhvbGRlcnMgdGhyb3VnaCBjb21taXRtZW50IHRvIGV4Y2VsbGVuY2VcdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWluZm9cIiBzdHlsZT17e2Zsb2F0OiAgJ3JpZ2h0J319PlB1Ymxpc2g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+UHVibGlzaCBVcGRhdGU8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlVwZGF0ZTwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj4mbmJzcDs8L2VtPlZpc2liaWxpdHk6IFB1YmxpYzwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyLWNoZWNrLW9cIj4mbmJzcDs8L2VtPlB1Ymxpc2hlZDogSW1tZWRpYXRlbHk8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiAgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fT5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPjxoMz5Db21wYW55IFZpc2lvbjwvaDM+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCIgPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIG5hbWU9XCJjb250ZW50M1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0VG8gZGVsaXZlciBpbnZlc3RtZW50IG9wcG9ydHVuaXRpZXMsIGdlbmVyYXRlIHZhbHVlZCByZXR1cm5zIHRvIG91ciBzdGFrZWhvbGRlcnMgdGhyb3VnaCBjb21taXRtZW50IHRvIGV4Y2VsbGVuY2VcclxuXHRcdFx0XHRcdFx0XHRcdDwvdGV4dGFyZWE+XHRcclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1pbmZvXCIgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fSA+UHVibGlzaDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFxyXG5cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+UHVibGlzaCBVcGRhdGU8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlVwZGF0ZTwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj4mbmJzcDs8L2VtPlZpc2liaWxpdHk6IFB1YmxpYzwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyLWNoZWNrLW9cIj4mbmJzcDs8L2VtPlB1Ymxpc2hlZDogSW1tZWRpYXRlbHk8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiAgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fT5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj4gXHJcblx0XHQgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+Q29yZSBWYWx1ZXM8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiID5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudDRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFRvIGRlbGl2ZXIgaW52ZXN0bWVudCBvcHBvcnR1bml0aWVzLCBnZW5lcmF0ZSB2YWx1ZWQgcmV0dXJucyB0byBvdXIgc3Rha2Vob2xkZXJzIHRocm91Z2ggY29tbWl0bWVudCB0byBleGNlbGxlbmNlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RleHRhcmVhPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlB1Ymxpc2g8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDM+UHVibGlzaCBVcGRhdGU8L2gzPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIHN0eWxlPXt7ZmxvYXQ6ICAncmlnaHQnfX0gPlVwZGF0ZTwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IDxzcGFuPjxlbSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj4mbmJzcDs8L2VtPlZpc2liaWxpdHk6IFB1YmxpYzwvc3Bhbj4mbmJzcDs8YSBocmVmPVwiI1wiIHN0eWxlPXt7Y29sb3I6ICAnYmx1ZSd9fSA+ZWRpdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQgPHNwYW4+PGVtIGNsYXNzTmFtZT1cImZhIGZhLWNhbGVuZGFyLWNoZWNrLW9cIj4mbmJzcDs8L2VtPlB1Ymxpc2hlZDogSW1tZWRpYXRlbHk8L3NwYW4+Jm5ic3A7PGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOiAgJ2JsdWUnfX0gPmVkaXQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiAgc3R5bGU9e3tmbG9hdDogICdyaWdodCd9fT5QdWJsaXNoPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG5cdFx0XHRcdFx0XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPC9ob21lPlxyXG5cdFxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==