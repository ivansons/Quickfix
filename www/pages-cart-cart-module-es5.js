function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot='start'>\n\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item *ngFor='let i of bookApi.cart'>\n  {{i.material_info.title}}\n</ion-item>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"ion-text-center\">\n  <ion-fab-button (click)='download()'>\n    <ion-icon name=\"download-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cart/cart-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartPageRoutingModule */

  /***/
  function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
      return CartPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }];

    var CartPageRoutingModule = function CartPageRoutingModule() {
      _classCallCheck(this, CartPageRoutingModule);
    };

    CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/pages/cart/cart-routing.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cart/cart.page.ts ***!
    \*****************************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/books.service */
    "./src/app/services/books.service.ts");
    /* harmony import */


    var ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-papaparse */
    "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");

    var CartPage =
    /*#__PURE__*/
    function () {
      function CartPage(bookApi, papa) {
        _classCallCheck(this, CartPage);

        this.bookApi = bookApi;
        this.papa = papa;
        this.temp = [];
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < this.bookApi.cart.length; i++) {
            var raw = {
              ItemNo: i,
              ISBN_ISSN: this.bookApi.cart[i]['material_info'].industryIdentifiers[0].identifier,
              Title: this.bookApi.cart[i]['material_info'].title,
              Publisher: this.bookApi.cart[i]['material_info'].publisher,
              Author1: this.bookApi.cart[i]['material_info'][0] ? this.bookApi.cart[i]['bookDetail'][0] : "-",
              Author2: this.bookApi.cart[i]['material_info'][1] ? this.bookApi.cart[i]['bookDetail'][1] : "-",
              Author3: this.bookApi.cart[i]['material_info'][2] ? this.bookApi.cart[i]['bookDetail'][2] : "-",
              Author4: this.bookApi.cart[i]['material_info'][3] ? this.bookApi.cart[i]['bookDetail'][3] : "-",
              Pages: this.bookApi.cart[i]['material_info'].pageCount
            };
            this.temp.push(raw);
          }
        }
      }, {
        key: "download",
        value: function download() {
          console.log(this.temp);
          var csv = this.papa.unparse(this.temp);
          var blob = new Blob([csv]);
          var a = window.document.createElement('a');
          a.href = window.URL.createObjectURL(blob);
          a.download = 'CartData.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/pages/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"]])], CartPage);
    /***/
  },

  /***/
  "./src/app/services/books.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/books.service.ts ***!
    \*******************************************/

  /*! exports provided: BooksService */

  /***/
  function srcAppServicesBooksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksService", function () {
      return BooksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BooksService =
    /*#__PURE__*/
    function () {
      function BooksService(http) {
        _classCallCheck(this, BooksService);

        this.http = http;
        this.searchedBooks = [];
        this.cart = [];
        console.log("Hello service provider");
        this.readProduct().then(function (data) {
          console.log(data);
        });
        this.getBookTypes();
      }

      _createClass(BooksService, [{
        key: "readProduct",
        value: function readProduct() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.http.get("assets/works.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response;
            })).subscribe(function (data) {
              {
                _this.products = data;
                resolve(_this.products);
              }
            });
          });
        }
      }, {
        key: "search",
        value: function search(item) {
          return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + item + "&maxResults=20");
        }
      }, {
        key: "addToCart",
        value: function addToCart(book) {
          this.cart.push(book);
          console.log(this.cart);
        }
      }, {
        key: "getBookTypes",
        value: function getBookTypes() {
          var _this2 = this;

          this.http.get('https://cors-anywhere.herokuapp.com/http://72.249.48.96/~dmppeytr/api/types?_format=json').subscribe(function (res) {
            _this2.bookTypes = res;
            console.log('Got Book Types=', res);
          });
        }
      }]);

      return BooksService;
    }();

    BooksService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], BooksService);
    /***/
  }
}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map