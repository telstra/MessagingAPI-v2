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

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-8 offset-md-4\">\r\n        <h1>Happy Chat 😄</h1>\r\n    </div>\r\n    <hr>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-notification></app-notification>\r\n<app-error></app-error>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_error_module__ = __webpack_require__("../../../../../src/app/error/error.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__error_error_module__["a" /* ErrorModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
        ],
        providers: [],
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
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/demo/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of messages; let i = index;\">\r\n  <div class=\"card card-outline-warning\" [@flyIn]>\r\n    <div class=\"card-block\">\r\n      <h6 class=\"card-title\">{{ message?.chatter.name }} says...</h6>\r\n      <p class=\"card-text\">{{ message?.message }}</p>\r\n      <br>\r\n      <div class=\"pull-right text-muted\">\r\n        at {{ message?.sentTimestamp | date: \t'dd/MM/yyyy hh:mm:ss' }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/chat-box/chat-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin: 1em; }\n\nimg {\n  height: 10%;\n  width: 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/chat-box/chat-box.component.ts":
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
    }
    return ChatBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], ChatBoxComponent.prototype, "messages", void 0);
ChatBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-chat-box',
        template: __webpack_require__("../../../../../src/app/demo/chat-box/chat-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/chat-box/chat-box.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('flyIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150)
                ])
            ])
        ]
    })
], ChatBoxComponent);

//# sourceMappingURL=chat-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"card card-outline-primary\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Send SMS</h3>\n        <form [formGroup]=\"smsForm\">\n          <div formArrayName=\"to\">\n            <ng-container *ngFor=\"let number of smsForm.get('to')['controls']; let i = index\">\n              <label>Recipient {{ i + 1 }}</label>\n              <div [formGroupName]=\"i\" class=\"input-group\">\n                <input type=\"text\" class=\"form-control col-md-4\" formControlName=\"number\" placeholder=\"Phone Number\">\n                <input type=\"text\" class=\"form-control col-md-4\" formControlName=\"name\" placeholder=\"Name\">\n                <span class=\"input-group-btn\">\n                  <button *ngIf=\"smsForm.get('to')['controls'].length > 1\" \n                    class=\"btn btn-danger\" (click)=\"removeTo(i)\"><i class=\"fa fa-times\"></i>\n                  </button>\n                </span>\n              </div>\n              <ng-container *ngIf=\"sentMessages.length > 0\">\n                <span [ngSwitch]=\"getMessageStatus(smsForm.get('to')['controls'][i]['controls']['number'].value)\">\n                  <div *ngSwitchCase=\"'DELIVRD'\">\n                    <span class=\"text-success\"><i class=\"fa fa-check-circle\"></i> Sent!</span>\n                  </div>\n                  <div *ngSwitchCase=\"'DeliveryImpossible'\">\n                    <span class=\"text-danger\"><i class=\"fa fa-times-circle\"></i> Failed! Delivery impossible</span>\n                  </div>\n                  <div *ngSwitchCase=\"'MessageWaiting'\">\n                    <span class=\"text-warning\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i> Pending...</span>\n                  </div>\n                </span>\n              </ng-container>\n              <div *ngIf=\"!smsForm.valid\" class=\"container\">\n                <div class=\"row\">\n                  <div *ngIf=\"smsForm.get('to')['controls'][i].get('number').hasError('required')\n                        && smsForm.get('to')['controls'][i].get('number').touched\" class=\"col-md-3 alert alert-danger form-error\" style=\"margin-right: 1em\">\n                        Number required\n                  </div>\n                  <div *ngIf=\"smsForm.get('to')['controls'][i].get('name').hasError('required')\n                        && smsForm.get('to')['controls'][i].get('name').touched\" class=\"col-md-3 alert alert-danger form-error\">\n                        Name required\n                  </div>\n                </div>\n              </div>\n              <br>\n            </ng-container>\n            <button class=\"btn btn-outline-success btn-sm\" style=\"margin-bottom: 1em\" (click)=\"addTo()\">Add Recipient</button>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message\">Message</label>\n            <textarea rows=\"5\" class=\"form-control\" formControlName=\"message\"></textarea>\n            <div *ngIf=\"smsForm.get('message').hasError('required')\n                        && smsForm.get('message').touched\" class=\"alert alert-danger form-error\">\n              Message required\n            </div>\n          </div>\n          <button class=\"btn btn-outline-primary col-md-2\" [disabled]=\"!smsForm.valid\" (click)=\"onSend()\">\n            <i *ngIf=\"messageWaiting\" class=\"fa fa-refresh fa-spin fa-fw\"></i>\n            {{ messageWaiting ? '' : 'Send' }}\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 chat-container\">\n    <app-chat-box [messages]=\"messages\"></app-chat-box>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  height: 65vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto; }\n\n.chat-container {\n  height: 65vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n.navbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 15vh; }\n\n.navbar > div > p {\n  margin-left: 2em; }\n\n.card-outline-warning > div > h3 {\n  color: #ffbb33; }\n  .card-outline-warning > div > h3 i {\n    cursor: pointer; }\n\n.fa-check-circle {\n  color: #5cb85c; }\n\n.fa-times-circle {\n  color: #d9534f; }\n\n#failed-text {\n  color: #d9534f; }\n\n#sent-text {\n  color: #5cb85c; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_service__ = __webpack_require__("../../../../../src/app/demo/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_sms_model__ = __webpack_require__("../../../../../src/app/models/sms.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chatter_model__ = __webpack_require__("../../../../../src/app/models/chatter.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_message_status_model__ = __webpack_require__("../../../../../src/app/models/message-status.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
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
    function DemoComponent(demoService, fb) {
        this.demoService = demoService;
        this.fb = fb;
        // replace these with your own notifyURL and provisioned phone number
        this.myNotifyURL = "your notify URL here";
        this.myNumber = "your provisioned phone number here";
        this.messages = [];
        this.sentMessages = [];
        this.chatters = [];
    }
    // Australian numbers dont have to be in international format for the messaging API to send them a message, but the API will
    // return the number in the message status and message receieved callbacks in international format. Since we use the number to
    // identify our chatters we convert any phone numbers starting with a 0 to international format before assigning it to a chatter
    DemoComponent.prototype.convertToInternationalFormat = function (phoneNumber) {
        phoneNumber = phoneNumber.replace(phoneNumber[0], '+61');
        return phoneNumber;
    };
    // send an SMS
    DemoComponent.prototype.onSend = function () {
        var _this = this;
        // double check if the form is valid
        if (this.smsForm.valid) {
            this.sentMessages = [];
            var numbers_1 = [];
            // create our array of phone numbers and set up our chatter
            this.smsForm.get('to').value.forEach(function (to) {
                if (to.number[0] === '0') {
                    to.number = _this.convertToInternationalFormat(to.number);
                }
                numbers_1.push(to.number);
                if (!_this.chatters.find(function (chatter) { return chatter.number === to.number; })) {
                    _this.chatters.push(new __WEBPACK_IMPORTED_MODULE_7__models_chatter_model__["a" /* Chatter */](to.name, to.number));
                }
            });
            // create the SMS object to send to the messaging API
            var sms = new __WEBPACK_IMPORTED_MODULE_6__models_sms_model__["a" /* SMS */](numbers_1, this.myNumber, '60', false, this.myNotifyURL, false, this.smsForm.get('message').value);
            // Send the SMS via the demoService. We will get a MessageSentResponse back
            this.messageWaiting = this.demoService.sendSMS(sms).subscribe(function (response) {
                _this.messageWaiting = null;
                // add all messages from the response to our sentMessages array.
                response.messages.forEach(function (message) {
                    // here we remove everything after the first hyphen in the messageId. This is because the message status returns this same
                    // id but with a / instead of a hyphen. Thats ok though, because everything after these symbols is just the phone number,
                    // everything before these symbols is the actual message id
                    message.messageId = message.messageId.substr(0, message.messageId.indexOf('-'));
                    // push the MessageStatus to our sentMessages array. We will update this as the status of the message in the UI
                    _this.sentMessages.push(new __WEBPACK_IMPORTED_MODULE_8__models_message_status_model__["a" /* MessageStatus */](message.to, message.messageId, message.deliveryStatus));
                });
            }, function (error) { return _this.messageWaiting = null; });
        }
        else {
            this.smsForm.markAsDirty();
        }
    };
    // gets the message status. Because of the way the app is set up we use the phone number and find it in our sentMessages array.
    // A much better implementation of getting the message status would be to use the messageId
    DemoComponent.prototype.getMessageStatus = function (phoneNumber) {
        var result = null;
        if (phoneNumber) {
            phoneNumber = this.convertToInternationalFormat(phoneNumber);
            if (this.sentMessages.find(function (message) { return message.to === phoneNumber; })) {
                result = this.sentMessages.find(function (message) { return message.to === phoneNumber; }).deliveryStatus;
            }
        }
        return result;
    };
    // sets up the form, and also is a quick and easy way of resetting form arrays
    DemoComponent.prototype.bindForm = function () {
        this.smsForm = this.fb.group({
            to: this.fb.array([]),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required)
        });
    };
    // initialises the form controls in the 'to' form field when the user clicks the add recipient button
    DemoComponent.prototype.initNumber = function () {
        return this.fb.group({
            number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required)
        });
    };
    // add a 'to' form field
    DemoComponent.prototype.addTo = function () {
        var control = this.smsForm.get('to');
        control.push(this.initNumber());
    };
    // rmeove a 'to' form field
    DemoComponent.prototype.removeTo = function (i) {
        var control = this.smsForm.get('to');
        control.removeAt(i);
    };
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the getMessageStatus function in the service. This function uses socket.io to listen for message status events
        // from the API
        this.demoService.getMessageStatus().subscribe(function (response) {
            response.messageId = response.messageId.substr(0, response.messageId.indexOf('/'));
            var sentMessageIndex = _this.sentMessages.findIndex(function (message) { return message.messageId === response.messageId; });
            if (sentMessageIndex !== -1) {
                _this.sentMessages[sentMessageIndex] = response;
            }
        });
        // subscrive to the get<essages function in the service. This function uses socket.io to listen for message received events
        // from the API
        this.demoService.getMessages().subscribe(function (response) {
            var chatter = _this.chatters.find(function (chatter) { return chatter.number === response.from; });
            if (!chatter) {
                chatter = new __WEBPACK_IMPORTED_MODULE_7__models_chatter_model__["a" /* Chatter */]('Happy chatter', response.from);
            }
            _this.messages.unshift(new __WEBPACK_IMPORTED_MODULE_9_app_models_message_model__["a" /* Message */](chatter, response.body, response.sentTimestamp, response.messageId));
        });
        this.bindForm();
        this.addTo();
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-demo',
        template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/demo.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__demo_service__["a" /* DemoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_service__ = __webpack_require__("../../../../../src/app/demo/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/demo/chat-box/chat-box.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__chat_box_chat_box_component__["a" /* ChatBoxComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__demo_service__["a" /* DemoService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__chat_box_chat_box_component__["a" /* ChatBoxComponent */]
        ]
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/app/demo/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error_service__ = __webpack_require__("../../../../../src/app/error/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DemoService = (function () {
    function DemoService(http, router, errorService) {
        this.http = http;
        this.router = router;
        this.errorService = errorService;
        this.hostURL = "http://" + document.location.host;
    }
    // error handler
    DemoService.prototype.handleError = function (error) {
        this.errorService.handleError(error.json());
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error.json());
    };
    // sends an SMS using the SDK and messaging API
    DemoService.prototype.sendSMS = function (sms) {
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
    // listens via websockets for the message status callback event from the API. See the readme file for more information on
    // how to set this up
    DemoService.prototype.getMessageStatus = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(_this.hostURL);
            _this.socket.on('message_status', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    // listens via websockets for the message received callback event from the API. See the readme file for more information on
    // how to set this up
    DemoService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(_this.hostURL);
            _this.socket.on('message_received', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return DemoService;
}());
DemoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
], DemoService);

var _a, _b, _c;
//# sourceMappingURL=demo.service.js.map

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
        this.errorOccured = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new __WEBPACK_IMPORTED_MODULE_1__error_model__["a" /* Error */](error.title, error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/chatter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chatter; });
var Chatter = (function () {
    function Chatter(name, number) {
        this.name = name;
        this.number = number;
    }
    return Chatter;
}());

//# sourceMappingURL=chatter.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/message-status.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageStatus; });
// represents the message status response returned from the API
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

/***/ "../../../../../src/app/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(chatter, message, sentTimestamp, messageId) {
        this.chatter = chatter;
        this.message = message;
        this.sentTimestamp = sentTimestamp;
        this.messageId = messageId;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/sms.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMS; });
// represents what the API needs in order to send an SMS. MessageId is added here just for our app
var SMS = (function () {
    function SMS(to, from, validity, priority, notifyURL, replyRequst, body, messageId) {
        this.to = to;
        this.from = from;
        this.validity = validity;
        this.priority = priority;
        this.notifyURL = notifyURL;
        this.replyRequest = replyRequst;
        this.body = body;
        this.messageId = messageId;
    }
    return SMS;
}());

//# sourceMappingURL=sms.model.js.map

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map