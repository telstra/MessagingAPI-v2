webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-8 ml-auto mb-3\">\r\n        <!-- <h1>Happy Chat 😄</h1> -->\r\n        <h1>\r\n            <i class=\"fa\">\r\n                <span class=\"ticon-MessagingAPI-icon-2\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>\r\n            </i> Happy Chat\r\n            <i class=\"fa fa-spin\">\r\n                <span class=\"ticon-Circuit---Circle-01\"><span class=\"path1\"></span><span class=\"path2\"></span></span>\r\n            </i>\r\n        </h1>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-error></app-error>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Anyong Haesayo!!!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_demo_module__ = __webpack_require__("../../../../../src/app/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_box_chat_box_module__ = __webpack_require__("../../../../../src/app/chat-box/chat-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_error_module__ = __webpack_require__("../../../../../src/app/error/error.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loading_loading_module__ = __webpack_require__("../../../../../src/app/loading/loading.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tick_tick_module__ = __webpack_require__("../../../../../src/app/tick/tick.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_messaging_service__ = __webpack_require__("../../../../../src/app/providers/messaging.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__demo_demo_module__["a" /* DemoModule */],
            __WEBPACK_IMPORTED_MODULE_7__chat_box_chat_box_module__["a" /* ChatBoxModule */],
            __WEBPACK_IMPORTED_MODULE_8__error_error_module__["a" /* ErrorModule */],
            __WEBPACK_IMPORTED_MODULE_9__loading_loading_module__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_10__tick_tick_module__["a" /* TickModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__providers_messaging_service__["a" /* MessagingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var APP_ROUTES = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'demo', component: __WEBPACK_IMPORTED_MODULE_1__demo_demo_component__["a" /* DemoComponent */] },
    { path: '*', redirectTo: 'demo' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let message of messages; let i = index;\">\r\n  <div class=\"card mb-3\" [ngClass]=\"replyRequestIds.indexOf(message.messageId) !== -1 ? 'card-purple' : 'card-orange'\" [@flyIn]>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{ message.from }} {{ replyRequestIds.indexOf(message.messageId) !== -1 ? 'replies...' : 'says...' }}\r\n          <i class=\"fa fa-times fa-spin-hover\" style=\"float: right\" (click)=\"removeMessage(i)\"></i>\r\n      </h5>\r\n      <p class=\"card-text\">{{ message.body }}</p>\r\n    </div>\r\n    <div class=\"card-footer text-muted text-right\">\r\n      <p>{{ message.sentTimestamp | date: 'dd/MM/yyyy hh:mm:ss' }}</p>\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-orange {\n  border-color: #f7954a; }\n  .card-orange h5 {\n    color: #f7954a; }\n  .card-orange .card-footer {\n    background-color: transparent;\n    border-top: none; }\n\n.card-purple {\n  border-color: #ae4c81; }\n  .card-purple h5 {\n    color: #ae4c81; }\n  .card-purple .card-footer {\n    background-color: transparent;\n    border-top: none; }\n\n.fa-times {\n  cursor: pointer; }\n\n.fa-spin-hover:hover {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBoxComponent = (function () {
    function ChatBoxComponent() {
        this.messageRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    ChatBoxComponent.prototype.removeMessage = function (i) {
        this.messageRemoved.emit(i);
    };
    return ChatBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Array)
], ChatBoxComponent.prototype, "messages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Array)
], ChatBoxComponent.prototype, "replyRequestIds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], ChatBoxComponent.prototype, "messageRemoved", void 0);
ChatBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-chat-box',
        template: __webpack_require__("../../../../../src/app/chat-box/chat-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-box/chat-box.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('flyIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ChatBoxComponent);

var _a;
//# sourceMappingURL=chat-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_box_component__ = __webpack_require__("../../../../../src/app/chat-box/chat-box.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatBoxModule = (function () {
    function ChatBoxModule() {
    }
    return ChatBoxModule;
}());
ChatBoxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_box_component__["a" /* ChatBoxComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat_box_component__["a" /* ChatBoxComponent */]
        ]
    })
], ChatBoxModule);

//# sourceMappingURL=chat-box.module.js.map

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n\n    <div class=\"card mb-3\" [ngClass]=\"cardState.SMS === 1 ? 'card-orange' : cardState.MMS === 1 ? 'card-red' : cardState.HISTORY === 1 ? 'card-purple' : 'card-grey'\">\n      <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-pills nav-justified\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"recipients-tab\" data-toggle=\"tab\" role=\"tab\" data-target=\"#nav-recipients\" (click)=\"setCardState('RECIPIENTS')\">Recipients</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"sms-tab\" data-toggle=\"tab\" role=\"tab\" data-target=\"#nav-sms\" (click)=\"setCardState('SMS')\">SMS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"mms-tab\" data-toggle=\"tab\" role=\"tab\" data-target=\"#nav-mms\" (click)=\"setCardState('MMS')\">MMS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"history-tab\" data-toggle=\"tab\" role=\"tab\" data-target=\"#nav-history\" (click)=\"setCardState('HISTORY')\">History</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"nav-recipients\" role=\"tabpanel\">\n            <h4 class=\"card-title\">Recipients</h4>\n            <p>Enter some numbers to get started! We only like international format, but feel free to enter whatever you like!</p>\n            <a class=\"btn mb-3\" [ngClass]=\"replyRequest ? 'btn-theme-purple' : 'btn-theme-purple-outline'\" (click)=\"replyRequest = !replyRequest; bindForm()\"><i class=\"fa fa-commenting\"></i> Reply Request</a>\n            <form [formGroup]=\"numbersForm\">\n              <div formArrayName=\"numbers\">\n                <ng-container *ngFor=\"let number of numbersForm.get('numbers')['controls']; let i = index\">\n                  <div [formGroupName]=\"i\" class=\"form-group input-group\">\n                    <input type=\"tel\" class=\"form-control\" formControlName=\"number\" placeholder=\"Recipient {{ i + 1 }}\">\n                    <span class=\"input-group-btn\" *ngIf=\"!replyRequest\">\n                          <a \n                            class=\"btn btn-success\" (click)=\"addNumber()\"><i class=\"fa fa-plus\" style=\"color: #fff\"></i>\n                          </a>\n                        </span>\n                    <span *ngIf=\"numbersForm.get('numbers')['controls'].length > 1\" class=\"input-group-btn\">\n                          <a\n                            class=\"btn btn-danger\" (click)=\"removeNumber(i)\"><i class=\"fa fa-times\" style=\"color: #fff\"></i>\n                          </a>\n                        </span>\n                  </div>\n                </ng-container>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"tab-pane fade show\" id=\"nav-sms\" role=\"tabpanel\">\n            <h4 class=\"card-title\">SMS</h4>\n            <div *ngIf=\"numbersForm.valid; else invalidMessage\">\n              <p class=\"card-text\">Send a SMS message to all recipients. Leave blank to send the Happy Chat 😄 default greeting.</p>\n              <div class=\"form-group\">\n                <label>Scheduled Delivery</label>\n                <input [(ngModel)]=\"scheduledDelivery\" class=\"form-control\" type=\"number\" placeholder=\"Minutes\">\n              </div>\n              <div class=\"form-group\">\n                <label>Message</label>\n                <textarea [(ngModel)]=\"smsMessage\" rows=\"5\" class=\"form-control\" placeholder=\"SMS message content\"></textarea>\n              </div>\n              <a class=\"btn btn-theme-orange-outline\" style=\"float: right\" (click)=\"sendSMS(smsMessage)\">\n                <i *ngIf=\"messageWaiting && !messageWaiting.closed\" class=\"fa fa-refresh fa-spin fa-fw\"></i>\n                {{ messageWaiting && !messageWaiting.closed ? '' : 'Send SMS' }}\n              </a>\n            </div>\n          </div>\n\n          <div class=\"tab-pane fade show\" id=\"nav-mms\" role=\"tabpanel\">\n            <h4 class=\"card-title\">MMS</h4>\n            <ng-container *ngIf=\"!replyRequest; else replyRequestActive\">\n              <div *ngIf=\"numbersForm.valid; else invalidMessage\">\n                <p class=\"card-text\">Send an MMS to all recipients. You can send jpg, png, gif, videos and even music! If your phone can send\n                  it, so can Happy Chat 😄 Feel free to upload as many files as you like!</p>\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"fileUpload btn btn-theme-red\">\n                      <span><i *ngIf=\"mmsFileLoading\" class=\"fa fa-refresh fa-spin\"></i>{{ !mmsFileLoading ? 'Add a file!' : '' }}</span>\n                      <input type=\"file\" class=\"upload\" (change)=\"onFileUpload($event)\" />\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"mmsContent.length > 0\">\n                  <div *ngFor=\"let mms of mmsContent; let i = index\" class=\"alert alert-success\">\n                    <div class=\"row\">\n                      <div class=\"col-10\">\n                        {{ mms.filename }} is ready to send!\n                      </div>\n                      <div class=\"col-2\">\n                        <i class=\"fa fa-times fa-spin-hover\" style=\"float: right\" (click)=\"removeMmsContent(i)\"></i>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"fileErrors.length > 0\">\n                  <div *ngFor=\"let fileError of fileErrors\" class=\"alert alert-danger form-error\">\n                    {{ fileError }}\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label>Subject</label>\n                  <input [(ngModel)]=\"mmsSubject\" class=\"form-control\" placeholder=\"Subject for the MMS message\">\n                </div>\n                <a class=\"btn btn-theme-red-outline\" style=\"float: right\" (click)=\"sendMMS(mmsSubject)\">\n                  <i *ngIf=\"messageWaiting && !messageWaiting.closed\" class=\"fa fa-refresh fa-spin\"></i>\n                  {{ messageWaiting && !messageWaiting.closed ? '' : 'Send MMS' }}\n              </a>\n              </div>\n            </ng-container>\n          </div>\n\n          <div class=\"tab-pane fade show\" id=\"nav-history\" role=\"tabpanel\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <h4>Message History</h4>\n              </div>\n              <div class=\"col align-self-center\">\n                <a class=\"btn btn-theme-purple-outline mb-3 btn-block\" *ngIf=\"sentMessages && sentMessages.length > 0\" (click)=\"clearStatusList()\">Clear All</a>\n              </div>\n            </div>\n            <p *ngIf=\"!sentMessages || sentMessages && sentMessages.length <= 0\">The status of all your sent messages can be seen here. Try sending something then checking this tab to watch\n              the callback events trigger in realtime!</p>\n            <div *ngFor=\"let message of sentMessages; let i = index\">\n              <div class=\"alert\" [ngClass]=\"successResponses.indexOf(message.deliveryStatus) !== -1 ? 'alert-success' : errorResponses.indexOf(message.deliveryStatus) !== -1 ? 'alert-danger' : 'alert-warning'\">\n                <h5 class=\"alert-heading\">{{ message.to }}\n                  <i class=\"fa fa-times fa-spin-hover\" style=\"float: right\" (click)=\"removeStatus(i)\"></i>\n                </h5>\n                <div class=\"row\">\n                  <div class=\"col-9\">\n                    <p><strong>ID: </strong> {{ message.messageId ? message.messageId : '😭😭😭' }} <br/> <strong>Status: </strong>{{\n                      message.deliveryStatus }} <br /><strong *ngIf=\"message.sentTimestamp\">Sent: </strong> {{ message.sentTimestamp\n                      }} <br />\n                      <strong *ngIf=\"message.receivedTimestamp\">Received: </strong> {{ message.receivedTimestamp }}\n                    </p>\n                  </div>\n                  <div class=\"col-3 align-self-center\">\n                    <div *ngIf=\"successResponses.indexOf(message.deliveryStatus) !== -1\">\n                      <div style=\"float: right\">\n                        <app-tick></app-tick>\n                      </div>\n                    </div>\n                    <div *ngIf=\"errorResponses.indexOf(message.deliveryStatus) !== -1\">\n                      <span class=\"text-danger\"><i class=\"fa fa-exclamation-triangle faa-ring animated fa-4x\" style=\"float: right\"></i></span>\n                    </div>\n                    <div *ngIf=\"message.deliveryStatus === 'MessageWaiting'\">\n                      <div style=\"float: right\">\n                        <app-loading [colour]=\"'rgb(246, 126, 35)'\"></app-loading>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <ng-template #invalidMessage>\n            <p class=\"card-text\">Please make sure all your recipient fields have something in them!</p>\n          </ng-template>\n          <ng-template #replyRequestActive>\n            <p class=\"card-text\">MMS does not currently support reply request 😭😭😭😭😭😭</p>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"chat-box\">\n      <app-chat-box [messages]=\"messages\" [replyRequestIds]=\"replyRequestIds\" (messageRemoved)=\"removeMessage($event)\"></app-chat-box>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: .5em\">\n  <div class=\"col\">\n    <p><span [ngClass]=\"{'spin-forwards': userConnected, 'spin-backwards': userDisconnected }\">😄</span> &nbsp;{{ connections\n      }} chatter{{ connections > 1 ? 's' : '' }} chatting\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group .form-control {\n  z-index: 0 !important; }\n\n.card {\n  max-height: 70vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto; }\n  .card .card-header {\n    background-color: transparent;\n    border-bottom: none; }\n\n.chat-box {\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n/* Button Themes */\n.btn.btn-theme-grey {\n  color: #fff;\n  background-color: #828486;\n  border-color: #828486; }\n  .btn.btn-theme-grey:hover {\n    color: #fff;\n    background-color: #646668; }\n  .btn.btn-theme-grey:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #97999b; }\n\n.btn.btn-theme-grey-outline {\n  color: #828486;\n  border-color: #828486; }\n  .btn.btn-theme-grey-outline:hover {\n    color: #fff;\n    background-color: #828486;\n    border-color: #828486; }\n  .btn.btn-theme-grey-outline:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #97999b; }\n\n.btn.btn-theme-orange {\n  color: #fff;\n  background-color: #f7954a;\n  border-color: #f7954a; }\n  .btn.btn-theme-orange:hover {\n    color: #fff;\n    background-color: #f67e23; }\n  .btn.btn-theme-orange:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #f9a96c; }\n\n.btn.btn-theme-orange-outline {\n  color: #f7954a;\n  border-color: #f7954a; }\n  .btn.btn-theme-orange-outline:hover {\n    color: #fff;\n    background-color: #f7954a;\n    border-color: #f7954a; }\n  .btn.btn-theme-orange-outline:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #f9a96c; }\n\n.btn.btn-theme-red {\n  color: #fff;\n  background-color: #f15c5b;\n  border-color: #f15c5b; }\n  .btn.btn-theme-red:hover {\n    color: #fff;\n    background-color: #ed2c2c; }\n  .btn.btn-theme-red:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #f58a8a; }\n\n.btn.btn-theme-red-outline {\n  color: #f15c5b;\n  border-color: #f15c5b; }\n  .btn.btn-theme-red-outline:hover {\n    color: #fff;\n    background-color: #f15c5b;\n    border-color: #f15c5b; }\n  .btn.btn-theme-red-outline:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #f58a8a; }\n\n.btn.btn-theme-purple {\n  color: #fff;\n  background-color: #ae4c81;\n  border-color: #ae4c81; }\n  .btn.btn-theme-purple:hover {\n    color: #fff;\n    background-color: #7c365c; }\n  .btn.btn-theme-purple:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #c1719c; }\n\n.btn.btn-theme-purple-outline {\n  color: #ae4c81;\n  border-color: #ae4c81; }\n  .btn.btn-theme-purple-outline:hover {\n    color: #fff;\n    background-color: #ae4c81;\n    border-color: #ae4c81; }\n  .btn.btn-theme-purple-outline:not([href]):not([tabindex]):active {\n    box-shadow: 0 0 0 2px #c1719c; }\n\n.card-grey {\n  border-color: #828486; }\n  .card-grey .nav-tabs > li > a:before {\n    background-color: #828486; }\n  .card-grey .nav-tabs > li > a:hover {\n    color: #828486; }\n    .card-grey .nav-tabs > li > a:hover:before {\n      visibility: visible;\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1); }\n  .card-grey .nav-tabs > li > a.active {\n    color: #828486;\n    border-bottom: 1px solid #828486; }\n  .card-grey h4 {\n    color: #828486; }\n\n.card-orange {\n  border-color: #f7954a; }\n  .card-orange .nav-tabs > li > a:before {\n    background-color: #f7954a; }\n  .card-orange .nav-tabs > li > a:hover {\n    color: #f7954a; }\n    .card-orange .nav-tabs > li > a:hover:before {\n      visibility: visible;\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1); }\n  .card-orange .nav-tabs > li > a.active {\n    color: #f7954a;\n    border-bottom: 1px solid #f7954a; }\n  .card-orange h4 {\n    color: #f7954a; }\n\n.card-red {\n  border-color: #f15c5b; }\n  .card-red .nav-tabs > li > a:before {\n    background-color: #f15c5b; }\n  .card-red .nav-tabs > li > a:hover {\n    color: #f15c5b; }\n    .card-red .nav-tabs > li > a:hover:before {\n      visibility: visible;\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1); }\n  .card-red .nav-tabs > li > a.active {\n    color: #f15c5b;\n    border-bottom: 1px solid #f15c5b; }\n  .card-red h4 {\n    color: #f15c5b; }\n\n.card-purple {\n  border-color: #ae4c81; }\n  .card-purple .nav-tabs > li > a:before {\n    background-color: #ae4c81; }\n  .card-purple .nav-tabs > li > a:hover {\n    color: #ae4c81; }\n    .card-purple .nav-tabs > li > a:hover:before {\n      visibility: visible;\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1); }\n  .card-purple .nav-tabs > li > a.active {\n    color: #ae4c81;\n    border-bottom: 1px solid #ae4c81; }\n  .card-purple h4 {\n    color: #ae4c81; }\n\n/* nav tabs */\n.nav-tabs {\n  border: none;\n  cursor: pointer; }\n  @media (max-width: 575px) {\n    .nav-tabs {\n      font-size: .9em; } }\n  .nav-tabs > li > a {\n    border-width: 0;\n    border: none;\n    position: relative; }\n    .nav-tabs > li > a:before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 1px;\n      bottom: -1px;\n      left: 0;\n      visibility: hidden;\n      -webkit-transform: scaleX(0);\n      transform: scaleX(0);\n      transition: all 0.3s ease-in-out 0s; }\n    .nav-tabs > li > a:hover:before {\n      visibility: visible;\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1); }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin-top: .5em;\n  margin-bottom: 1em; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.mms-image {\n  padding: 0 0 20px 0; }\n  .mms-image img {\n    max-width: 300px;\n    max-height: 300px; }\n\n.faa-ring.animated {\n  -webkit-animation: ring 2s ease infinite;\n  animation: ring 2s ease infinite; }\n\n.fa-times {\n  cursor: pointer; }\n\n.fa-spin-hover:hover {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.spin-forwards {\n  display: inline-block;\n  -webkit-animation: spin-forwards 0.3s linear;\n  animation: spin-forwards 0.3s linear; }\n\n.spin-backwards {\n  display: inline-block;\n  -webkit-animation: spin-backwards 0.3s linear;\n  animation: spin-backwards 0.3s linear; }\n\n@-webkit-keyframes ring {\n  0% {\n    -webkit-transform: rotate(-15deg);\n    transform: rotate(-15deg); }\n  2% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  4% {\n    -webkit-transform: rotate(-18deg);\n    transform: rotate(-18deg); }\n  6% {\n    -webkit-transform: rotate(18deg);\n    transform: rotate(18deg); }\n  8% {\n    -webkit-transform: rotate(-22deg);\n    transform: rotate(-22deg); }\n  10% {\n    -webkit-transform: rotate(22deg);\n    transform: rotate(22deg); }\n  12% {\n    -webkit-transform: rotate(-18deg);\n    transform: rotate(-18deg); }\n  14% {\n    -webkit-transform: rotate(18deg);\n    transform: rotate(18deg); }\n  16% {\n    -webkit-transform: rotate(-12deg);\n    transform: rotate(-12deg); }\n  18% {\n    -webkit-transform: rotate(12deg);\n    transform: rotate(12deg); }\n  20% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n@keyframes ring {\n  0% {\n    -webkit-transform: rotate(-15deg);\n    transform: rotate(-15deg); }\n  2% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  4% {\n    -webkit-transform: rotate(-18deg);\n    transform: rotate(-18deg); }\n  6% {\n    -webkit-transform: rotate(18deg);\n    transform: rotate(18deg); }\n  8% {\n    -webkit-transform: rotate(-22deg);\n    transform: rotate(-22deg); }\n  10% {\n    -webkit-transform: rotate(22deg);\n    transform: rotate(22deg); }\n  12% {\n    -webkit-transform: rotate(-18deg);\n    transform: rotate(-18deg); }\n  14% {\n    -webkit-transform: rotate(18deg);\n    transform: rotate(18deg); }\n  16% {\n    -webkit-transform: rotate(-12deg);\n    transform: rotate(-12deg); }\n  18% {\n    -webkit-transform: rotate(12deg);\n    transform: rotate(12deg); }\n  20% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n@-webkit-keyframes spin-forwards {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin-forwards {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes spin-backwards {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes spin-backwards {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messaging_service__ = __webpack_require__("../../../../../src/app/providers/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_sms_model__ = __webpack_require__("../../../../../src/app/models/sms.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_mms_model__ = __webpack_require__("../../../../../src/app/models/mms.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_message_status_model__ = __webpack_require__("../../../../../src/app/models/message-status.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoComponent = (function () {
    function DemoComponent(messaging, fb) {
        this.messaging = messaging;
        this.fb = fb;
        this.myNotifyURL = "Your notify url here";
        this.myNumber = "Your provisioned number here";
        this.errorResponses = ['DELETED', 'EXPIRED', 'UNDVBL', 'REJECTED', 'DeliveryImpossible'];
        this.successResponses = ['SENT', 'READ', 'DELIVRD'];
        this.acceptedFileTypes = ["audio/amr", "audio/aac", "audio/mp3", "audio/mpeg3", "audio/mpeg", "audio/mpg", "audio/wav", "audio/3gpp", "audio/mp4", "image/gif", "image/jpeg", "image/jpg", "image/png", "image/bmp", "video/mpeg4", "video/mp4", "video/mpeg", "video/3gpp", "video/3gp", "video/h263", "text/plain", "text/x-vCard", "text/x-vCalendar"];
        this.connections = 0;
        this.userConnected = true;
        this.userDisconnected = false;
        this.replyRequest = false;
        this.replyRequestIds = [];
        this.messages = [];
        this.sentMessages = [];
        this.mmsContent = [];
        this.fileErrors = [];
        this.cardState = { RECIPIENTS: 1, SMS: 0, MMS: 0, HISTORY: 0 };
    }
    // update the card state, changing the css class of the main card
    DemoComponent.prototype.setCardState = function (state) {
        this.cardState.RECIPIENTS = 0;
        this.cardState.SMS = 0;
        this.cardState.MMS = 0;
        this.cardState.HISTORY = 0;
        this.cardState[state] = 1;
    };
    // remove spaces from input numbers and update australian mobile numbers (04) to the +61 international format
    DemoComponent.prototype.convertToInternationalFormat = function (phoneNumber) {
        phoneNumber = phoneNumber.replace(/\s/g, "");
        if (phoneNumber[0] === '0' && phoneNumber[1] === '4') {
            phoneNumber = phoneNumber.replace(phoneNumber[0], '+61');
        }
        return phoneNumber;
    };
    // upload a file and add it to our MMSContent array
    DemoComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.fileErrors = [];
        if (event.target.files.length > 0) {
            // files sent over MMS are base64 encoded meaning they get about 30% larger, so we have to set 1.4mb file size limit on uploads
            // also check that the file type is one that can be sent by the API
            if (event.target.files[0].size < 1400000 && this.acceptedFileTypes.indexOf(event.target.files[0].type) !== -1) {
                this.mmsFileLoading = true;
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    _this.mmsContent.push(new __WEBPACK_IMPORTED_MODULE_7__models_mms_model__["a" /* MMSContent */](event.target.files[0].type, event.target.files[0].name, reader_1.result.split(',')[1]));
                    _this.mmsFileLoading = false;
                };
                reader_1.readAsDataURL(event.target.files[0]);
            }
            else {
                this.mmsFileLoading = false;
                if (event.target.files[0].size > 1400000) {
                    this.fileErrors.push("File size cannot exceed 1.4MB \uD83D\uDE2D");
                }
                if (this.acceptedFileTypes.indexOf(event.target.files[0].type) === -1) {
                    this.fileErrors.push("Not an accepted file type \uD83D\uDE2D");
                }
            }
        }
    };
    // removes an entry from MMSContent
    DemoComponent.prototype.removeMmsContent = function (i) {
        this.mmsContent.splice(i, 1);
    };
    // removes a message status from the list
    DemoComponent.prototype.removeStatus = function (i) {
        this.sentMessages.splice(i, 1);
    };
    // clears all message status' from the list
    DemoComponent.prototype.clearStatusList = function () {
        this.sentMessages = [];
    };
    // remove a message coming in from users
    DemoComponent.prototype.removeMessage = function (i) {
        this.messages.splice(i, 1);
    };
    // get the value from the phone numbers input and format the numbers
    DemoComponent.prototype.getRecipients = function () {
        var _this = this;
        var numbers = [];
        this.numbersForm.get('numbers').value.forEach(function (number) {
            numbers.push(_this.convertToInternationalFormat(number.number));
        });
        return numbers;
    };
    // send an SMS using the messaging API
    DemoComponent.prototype.sendSMS = function (messageContent) {
        var _this = this;
        // check for scheduledDelivery first. If this value is <= 0 the message will not send
        if (this.scheduledDelivery <= 0) {
            this.scheduledDelivery = null;
        }
        // dont send if we are awaiting a response from the server
        if (!this.messageWaiting || this.messageWaiting && this.messageWaiting.closed) {
            // boradcast does not support replyRequest, so when this feature is on we only take the first number from the form array.
            // if we dont have replyRequest we can broadcast to all the numbers
            var numbers = void 0;
            this.replyRequest ? numbers = this.convertToInternationalFormat(this.numbersForm.get('numbers').value[0].number)
                : numbers = this.getRecipients();
            // default message if the user hasnt filled anything out in the SMS message box
            if (!messageContent || messageContent && messageContent.trim() === '') {
                messageContent = "Hi! Thanks for using Happy Chat! We all love Happy Chat!";
            }
            // construst the SMS payload
            var sms = new __WEBPACK_IMPORTED_MODULE_6__models_sms_model__["a" /* SMS */](numbers, this.myNumber, '60', false, this.myNotifyURL, this.replyRequest, messageContent, this.scheduledDelivery);
            console.log('sending', sms);
            // subscribe to the sendSMS function in the service which will invoke the server to send the SMS and return with a 
            // MessageSentResponse
            this.messageWaiting = this.messaging.sendSMS(sms).subscribe(function (response) {
                // unsubscribe so we can send messages again
                _this.messageWaiting.unsubscribe();
                console.log('SMS response', response);
                // take the messages array from the response and add them to our sentMessages array to show up in 
                // the message history tab
                response.messages.forEach(function (message) {
                    // if replyRequest was set to true add the returned messageId to the array of replyRequestIds so we can
                    // identify messages receieved on that thread
                    if (_this.replyRequest) {
                        _this.replyRequestIds.push(message.messageId);
                    }
                    _this.sentMessages.unshift(new __WEBPACK_IMPORTED_MODULE_8__models_message_status_model__["a" /* MessageStatus */](message.to, message.messageId, message.deliveryStatus));
                });
            }, function (error) { return _this.messageWaiting.unsubscribe(); });
        }
    };
    // send an MMS message using the API. Follows pretty much the same flow as sending an SMS.
    DemoComponent.prototype.sendMMS = function (subjectContent) {
        var _this = this;
        // check for MMSContent first
        if (this.mmsContent.length > 0) {
            if (!this.messageWaiting || this.messageWaiting && this.messageWaiting.closed) {
                var numbers = this.getRecipients();
                if (!subjectContent || subjectContent && subjectContent.trim() === '') {
                    subjectContent = "Hi! Thanks for using Happy Chat! We all love Happy Chat!";
                }
                // construct the MMS payload
                var mms = new __WEBPACK_IMPORTED_MODULE_7__models_mms_model__["b" /* MMS */](this.myNumber, numbers, subjectContent, this.replyRequest, this.mmsContent);
                console.log('sending', mms);
                this.messageWaiting = this.messaging.sendMMS(mms).subscribe(function (response) {
                    _this.messageWaiting.unsubscribe();
                    console.log('MMS response', response);
                    response.messages.forEach(function (message) {
                        if (_this.replyRequest) {
                            _this.replyRequestIds.push(message.messageId);
                        }
                        _this.sentMessages.unshift(new __WEBPACK_IMPORTED_MODULE_8__models_message_status_model__["a" /* MessageStatus */](message.to, message.messageId, message.deliveryStatus));
                    });
                }, function (error) { return _this.messageWaiting = null; });
            }
        }
        else {
            this.fileErrors.push('At least one file required for MMS!');
        }
    };
    // bind the phone number input form. This is also a quick way to reset the form when the user clicks replyRequest
    DemoComponent.prototype.bindForm = function () {
        // if the numbersForm is already initialized store the first value temporarily so we can set it again 
        var number;
        if (this.numbersForm) {
            number = this.numbersForm.get('numbers').value[0].number;
        }
        this.numbersForm = this.fb.group({
            numbers: this.fb.array([])
        });
        // add a number to the array and set the value to the number if we have it
        this.addNumber(number);
    };
    // get the form array control for numbers and intialize a new number
    DemoComponent.prototype.addNumber = function (number) {
        var control = this.numbersForm.get('numbers');
        control.push(this.fb.group({
            number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: number, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required)
        }));
    };
    // remove a number from the form array
    DemoComponent.prototype.removeNumber = function (i) {
        var control = this.numbersForm.get('numbers');
        control.removeAt(i);
    };
    // for spinning the happy face at the bottom of the screen
    DemoComponent.prototype.setConnected = function (connected, disconnected) {
        this.userConnected = connected;
        this.userDisconnected = disconnected;
    };
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to message status events picked up in the messaging service
        this.messaging.getMessageStatus().subscribe(function (response) {
            console.log('status callback', response);
            var sentMessageIndex = _this.sentMessages.findIndex(function (message) { return message.messageId === response.messageId; });
            if (sentMessageIndex !== -1) {
                _this.sentMessages[sentMessageIndex] = response;
            }
        });
        // subscribe to message received events picked up in the messaging service
        this.messaging.getMessages().subscribe(function (response) {
            console.log('message received', response);
            _this.messages.unshift(response);
        });
        // subscribed to user connect/ disconnect events
        this.messaging.getConnectedUsers().subscribe(function (connections) {
            if (_this.connections === 0) {
                _this.connections = connections;
            }
            if (connections > _this.connections) {
                _this.setConnected(true, false);
            }
            else if (connections < _this.connections) {
                _this.setConnected(false, true);
            }
            _this.connections = connections;
            setTimeout(function () {
                _this.setConnected(false, false);
            }, 300);
        });
        // initialize the form array for number inputs
        this.bindForm();
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-demo',
        template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/demo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_messaging_service__["a" /* MessagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_messaging_service__["a" /* MessagingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object])
], DemoComponent);

var _a, _b;
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_loading_module__ = __webpack_require__("../../../../../src/app/loading/loading.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tick_tick_module__ = __webpack_require__("../../../../../src/app/tick/tick.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box_module__ = __webpack_require__("../../../../../src/app/chat-box/chat-box.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__loading_loading_module__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_5__tick_tick_module__["a" /* TickModule */],
            __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box_module__["a" /* ChatBoxModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */]
        ]
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" [ngStyle]=\"{'display': display}\"></div>\r\n<div class=\"modal fade show\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"errorModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': display}\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"errorModalLabel\">{{ error?.title }}</h5>\r\n        <i class=\"fa fa-times\" (click)=\"onErrorHandled()\" data-dismiss=\"modal\" aria-label=\"Close\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{ error?.message }}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" data-dismiss=\"modal\" (click)=\"onErrorHandled()\">OK</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n\nh5 {\n  color: #e11e1e; }\n\n.fa-times {\n  cursor: pointer;\n  color: #e11e1e;\n  font-size: 15px; }\n\n.fa-times:active {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.error = null;
        this.display = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccured
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__error_service__["a" /* ErrorService */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = (function () {
    function Error(title, message) {
        this.title = title;
        this.message = message;
    }
    return Error;
}());

//# sourceMappingURL=error.model.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorModule = (function () {
    function ErrorModule() {
    }
    return ErrorModule;
}());
ErrorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */]
        ]
    })
], ErrorModule);

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_model__ = __webpack_require__("../../../../../src/app/error/error.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });


var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new __WEBPACK_IMPORTED_MODULE_1__error_model__["a" /* Error */](error.title, error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader loader--style1\" title=\"0\">\n  <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"56px\" height=\"56px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n  <path opacity=\"0.2\" [ngStyle]=\"{ 'fill': colour }\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n  <path [ngStyle]=\"{ 'fill': colour }\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\n    <animateTransform attributeType=\"xml\"\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 20 20\"\n      to=\"360 20 20\"\n      dur=\"0.5s\"\n      repeatCount=\"indefinite\"/>\n    </path>\n  </svg>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader {\n  text-align: center;\n  display: inline-block;\n  vertical-align: top; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// https://codepen.io/aurer/pen/jEGbA
var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], LoadingComponent.prototype, "colour", void 0);
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../src/app/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loading/loading.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading/loading.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_component__ = __webpack_require__("../../../../../src/app/loading/loading.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__loading_component__["a" /* LoadingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__loading_component__["a" /* LoadingComponent */]
        ]
    })
], LoadingModule);

//# sourceMappingURL=loading.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/message-status.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageStatus; });
var MessageStatus = (function () {
    function MessageStatus(to, messageId, deliveryStatus, receivedTimestamp, sentTimestamp) {
        this.to = to;
        this.messageId = messageId;
        this.deliveryStatus = deliveryStatus;
        this.receivedTimestamp = receivedTimestamp;
        this.sentTimestamp = sentTimestamp;
    }
    return MessageStatus;
}());

//# sourceMappingURL=message-status.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/mms.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MMSContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MMS; });
var MMSContent = (function () {
    function MMSContent(type, filename, payload) {
        this.type = type;
        this.filename = filename;
        this.payload = payload;
    }
    return MMSContent;
}());

var MMS = (function () {
    function MMS(from, to, subject, replyRequest, MMSContent) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.replyRequest = replyRequest;
        this.MMSContent = MMSContent;
    }
    return MMS;
}());

//# sourceMappingURL=mms.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/sms.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMS; });
var SMS = (function () {
    function SMS(to, from, validity, priority, notifyURL, replyRequst, body, scheduledDelivery) {
        this.to = to;
        this.from = from;
        this.validity = validity;
        this.priority = priority;
        this.notifyURL = notifyURL;
        this.replyRequest = replyRequst;
        this.body = body;
        this.scheduledDelivery = scheduledDelivery;
    }
    return SMS;
}());

//# sourceMappingURL=sms.model.js.map

/***/ }),

/***/ "../../../../../src/app/providers/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagingService = (function () {
    function MessagingService(http, router, errorService) {
        this.http = http;
        this.router = router;
        this.errorService = errorService;
        this.hostURL = window.location.origin;
        this.replyRequestIds = [];
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__(this.hostURL);
    }
    MessagingService.prototype.handleError = function (error) {
        this.errorService.handleError(error.json());
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json());
    };
    MessagingService.prototype.sendSMS = function (sms) {
        var _this = this;
        var body = JSON.stringify(sms);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.post('/api/send', body, { headers: headers })
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    MessagingService.prototype.sendMMS = function (mms) {
        var _this = this;
        var body = JSON.stringify(mms);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.post('/api/sendMMS', body, { headers: headers })
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    MessagingService.prototype.getMessageStatus = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            _this.socket.on('message_status', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    MessagingService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            _this.socket.on('message_received', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    MessagingService.prototype.getConnectedUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            _this.socket.on('user_connected', function (data) {
                observer.next(data);
            });
            _this.socket.on('user_disconnected', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return MessagingService;
}());
MessagingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
], MessagingService);

var _a, _b, _c;
//# sourceMappingURL=messaging.service.js.map

/***/ }),

/***/ "../../../../../src/app/tick/tick.component.html":
/***/ (function(module, exports) {

module.exports = "<svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>"

/***/ }),

/***/ "../../../../../src/app/tick/tick.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: #7ac142;\n  fill: none;\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; }\n\n.checkmark {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 2;\n  stroke: #fff;\n  stroke-miterlimit: 10;\n  margin: 10% auto;\n  box-shadow: inset 0px 0px 0px #7ac142;\n  -webkit-animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\n          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both; }\n\n.checkmark__check {\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards; }\n\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes scale {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none; }\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1);\n            transform: scale3d(1.1, 1.1, 1); } }\n\n@keyframes scale {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none; }\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1);\n            transform: scale3d(1.1, 1.1, 1); } }\n\n@-webkit-keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #7ac142; } }\n\n@keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #7ac142; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tick/tick.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//  https://codepen.io/haniotis/pen/KwvYLO
var TickComponent = (function () {
    function TickComponent() {
    }
    TickComponent.prototype.ngOnInit = function () {
    };
    return TickComponent;
}());
TickComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-tick',
        template: __webpack_require__("../../../../../src/app/tick/tick.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tick/tick.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TickComponent);

//# sourceMappingURL=tick.component.js.map

/***/ }),

/***/ "../../../../../src/app/tick/tick.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tick_component__ = __webpack_require__("../../../../../src/app/tick/tick.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TickModule = (function () {
    function TickModule() {
    }
    return TickModule;
}());
TickModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tick_component__["a" /* TickComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tick_component__["a" /* TickComponent */]
        ]
    })
], TickModule);

//# sourceMappingURL=tick.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map