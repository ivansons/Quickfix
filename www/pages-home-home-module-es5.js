function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Logo</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button color='primary'>Login</ion-button>\n      <ion-button color='primary'>Register</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n  <p></p>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]='searchText' class=\"search\" slot='start' placeholder='Search books..'></ion-searchbar>\n  <ion-button  color='primary' slot='start' (click)='search()'>Search</ion-button>\n  </ion-toolbar>\n\n  <ion-grid *ngIf='bookApi.searchedBooks.length'>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor='let i of bookApi.searchedBooks' size-lg='4' size-xs='12' size-sm='6' size-xl='3' size-md='6'>\n      <ion-card  class=\"card1\">\n        <ion-img *ngIf='i.volumeInfo.imageLinks' src={{i.volumeInfo.imageLinks.thumbnail}}></ion-img>\n        <ion-card-content>\n          <b>{{i.volumeInfo.title}}</b>\n          <!-- <p>{{i.volumeInfo.subtitle}}</p> -->\n          <p color='primary' *ngIf='i.saleInfo.listPrice'>{{i.saleInfo.listPrice.amount}} {{i.saleInfo.listPrice.currencyCode}}</p>\n        </ion-card-content>\n          <ion-button color='light' (click)='view(i);'><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\n          <ion-button color='light' (click)='add(i)' >Add to cart <ion-icon slot='end' name=\"cart-outline\"></ion-icon></ion-button>\n      </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf='!bookApi.searchedBooks.length'>\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor='let i of [1,2,3,4,5,6]' size-lg='4' size-xs='12' size-sm='6' size-xl='3' size-md='6'>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" class=\"ion-text-center\">\n    <ion-badge color='danger'>{{bookApi.cart.length}}</ion-badge>\n    <ion-fab-button (click)='cart()'>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _book_book_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../book/book.module */
    "./src/app/pages/book/book.module.ts");
    /* harmony import */


    var _form_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../form/form.module */
    "./src/app/pages/form/form.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _book_book_module__WEBPACK_IMPORTED_MODULE_7__["BookPageModule"], _form_form_module__WEBPACK_IMPORTED_MODULE_8__["FormPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n  width: 500px;\n}\n\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.card1 {\n  -webkit-animation: scale-up-center 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n.card1 ion-img {\n  height: 200px;\n  width: auto;\n  margin-top: 5px;\n}\n\nion-skeleton-text {\n  line-height: 230px;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9HOlxcQW50b25pbyBsb25kb25cXERhbHJvMS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQW1DO0lBQUcsNkJBQUE7SUFBNEIscUJBQUE7RUNLaEU7RURMb0Y7SUFBSywyQkFBQTtJQUEyQixtQkFBQTtFQ1NwSDtBQUNGOztBRFYwSTtFQUEyQjtJQUFHLDZCQUFBO0lBQTRCLHFCQUFBO0VDZWxNO0VEZnNOO0lBQUssMkJBQUE7SUFBMkIsbUJBQUE7RUNtQnRQO0FBQ0Y7O0FEbkJBO0VBQ0ksZ0ZBQUE7RUFBNkUsd0VBQUE7QUNzQmpGOztBRHJCSTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3VCSjs7QURwQkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2h7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzY2FsZS11cC1jZW50ZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fVxyXG4uY2FyZDF7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpzY2FsZS11cC1jZW50ZXIgLjlzIGN1YmljLWJlemllciguMzksLjU3NSwuNTY1LDEuMDAwKSBib3RoO2FuaW1hdGlvbjpzY2FsZS11cC1jZW50ZXIgLjlzIGN1YmljLWJlemllciguMzksLjU3NSwuNTY1LDEuMDAwKSBib3RoO1xyXG4gICAgaW9uLWltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxufVxyXG5pb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjMwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9IiwiLnNlYXJjaCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmNhcmQxIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAwLjlzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuOXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbn1cbi5jYXJkMSBpb24taW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMjMwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _book_book_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../book/book.page */
    "./src/app/pages/book/book.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _form_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../form/form.page */
    "./src/app/pages/form/form.page.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(router, toastController, bookApi, modalController) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.toastController = toastController;
        this.bookApi = bookApi;
        this.modalController = modalController;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this = this;

          this.bookApi.searchedBooks = [];
          console.log(this.searchText);
          this.bookApi.search(this.searchText).subscribe(function (res) {
            console.dir(res);
            setTimeout(function () {
              _this.bookApi.searchedBooks = res['items'];
            }, 1000);
          }, function (err) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: "Can't connect to server..",
                        duration: 4000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present(); // alert("Something went wrong..");

                      console.log(err);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "view",
        value: function view(book) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(book);
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _book_book_page__WEBPACK_IMPORTED_MODULE_4__["BookPage"],
                      componentProps: {
                        'bookDetail': book
                      },
                      mode: 'ios'
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "add",
        value: function add(book) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _form_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"],
                      componentProps: {
                        'bookDetail': book
                      },
                      mode: 'ios'
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "cart",
        value: function cart() {
          this.router.navigateByUrl('cart');
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map