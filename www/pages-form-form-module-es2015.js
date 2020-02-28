(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form/form.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form/form.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Give details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label>Select material type</ion-label>\n    <ion-select mode='ios' [(ngModel)]='data.selectedBooktype' placeholder=\"Select\">\n      <ion-select-option *ngFor='let i of bookApi.bookTypes' value={{i.tid}}>{{i.name}}</ion-select-option>\n    </ion-select>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.maxticket' placeholder='Maximum ticket price' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.minticket' placeholder='Minimum ticket price' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.loancollection' placeholder='Number of copies short loan collection' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.courses' placeholder='Number of course packs' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-label>Performances</ion-label>\n    <ion-datetime [(ngModel)]='data.performancedate' mode='md' displayFormat=\"MM DD YYYY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.revenue' placeholder='Projected revenue' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-label>Sold performances dates</ion-label>\n    <ion-datetime [(ngModel)]='data.soldpreformancedate' mode='md' displayFormat=\"MM DD YYYY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.studentenrolled' placeholder='Students enrolled in course of study' type='number'></ion-input>\n  </ion-item><br>\n  <ion-item>\n    <ion-input [(ngModel)]='data.usagetype' placeholder='Usage type' type='number'></ion-input>\n  </ion-item><br>\n</ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button size='block' [disabled]='!data.usagetype' (click)='continue()'>Continue</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/form/form-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/form/form-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageRoutingModule", function() { return FormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/pages/form/form-routing.module.ts");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");







let FormPageModule = class FormPageModule {
};
FormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPageRoutingModule"]
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]]
    })
], FormPageModule);



/***/ }),

/***/ "./src/app/pages/form/form.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/form/form.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/form/form.page.ts ***!
  \*****************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let FormPage = class FormPage {
    constructor(bookApi, navParams, modalCtlr) {
        this.bookApi = bookApi;
        this.navParams = navParams;
        this.modalCtlr = modalCtlr;
        /*   public selectedBooktype:any;
          public  maxticket:any;
          public  minticket:any;
          public  loancollection:any;
          public courses :any;
          public  performancedate:any;
          public revenue :any;
          public  soldpreformancedate:any;
          public studentenrolled :any;
          public usagetype :any; */
        this.data = {
            selectedBooktype: '',
            maxticket: '',
            minticket: '',
            loancollection: '',
            courses: '',
            performancedate: '',
            revenue: '',
            soldpreformancedate: '',
            studentenrolled: '',
            material_info: []
        };
    }
    ngOnInit() {
        this.data.material_info = this.navParams.get('bookDetail').volumeInfo;
    }
    continue() {
        console.log(this.data);
        this.bookApi.addToCart(this.data);
        this.modalCtlr.dismiss();
    }
};
FormPage.ctorParameters = () => [
    { type: src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
FormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form/form.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.page.scss */ "./src/app/pages/form/form.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], FormPage);



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
        this.searchedBooks = [];
        this.cart = [];
        console.log("Hello service provider");
        this.readProduct()
            .then(data => {
            console.log(data);
        });
        this.getBookTypes();
    }
    readProduct() {
        return new Promise(resolve => {
            this.http.get("assets/works.json").
                pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response)).
                subscribe((data) => {
                {
                    this.products = data;
                    resolve(this.products);
                }
            });
        });
    }
    search(item) {
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + item + "&maxResults=20");
    }
    addToCart(book) {
        this.cart.push(book);
        console.log(this.cart);
    }
    getBookTypes() {
        this.http.get('https://cors-anywhere.herokuapp.com/http://72.249.48.96/~dmppeytr/api/types?_format=json').subscribe(res => {
            this.bookTypes = res;
            console.log('Got Book Types=', res);
        });
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BooksService);



/***/ })

}]);
//# sourceMappingURL=pages-form-form-module-es2015.js.map