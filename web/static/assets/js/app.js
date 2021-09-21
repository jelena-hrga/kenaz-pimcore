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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/static/js/main.js":
/***/ (function(module, exports) {

$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='prev-arrow--slider' src='/var/assets/arrow-left.svg'>",
        nextArrow: "<img class='next-arrow--slider' src='/var/assets/arrow-right.svg'>"
    });

    $('.carousel-news').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<img class='prev-arrow' src='/var/assets/prev-arrow-yellow.svg'>",
        nextArrow: "<img class='next-arrow' src='/var/assets/next-arrow-yellow.svg'>"
    });

    $('.carousel-news-single').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='prev-arrow' src='/var/assets/prev-arrow-brown.svg'>",
        nextArrow: "<img class='next-arrow' src='/var/assets/next-arrow-brown.svg'>"
    });

    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.bottom-slider'
    });
    $('.bottom-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.top-slider',
        dots: false,
        focusOnSelect: true,
        prevArrow: "<img class='prev-arrow--gallery' src='/var/assets/arrow-left.svg'>",
        nextArrow: "<img class='next-arrow--gallery' src='/var/assets/arrow-right.svg'>"
    });

    $('.magnifier').on('click', function (e) {
        var img = e.target.nextElementSibling;
        var newImg = $('.new-image');
        var imgDiv = $('.fullscreen-image');
        newImg.attr("src", img.src);
        imgDiv.css({ "display": "block" });
    });

    $('.close').on('click', function () {
        $('.fullscreen-image').css({ "display": "none" });
    });

    $('#authorName').attr('placeholder', 'Name');
    $('#authorEmail').attr('placeholder', 'Email Address');
    $('textarea').attr('placeholder', 'Comment');

    if (window.location.href.includes('epage')) {
        var randomNews = $('.random-column');
        randomNews.children('.footernews-heading').text('Random News');
    }
});

/***/ }),

/***/ "./web/static/styles/main.sass":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./web/static/js/main.js");
module.exports = __webpack_require__("./web/static/styles/main.sass");


/***/ })

/******/ });