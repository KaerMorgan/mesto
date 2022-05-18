(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{xZ:()=>X,N_:()=>Y,Gs:()=>Q}),document.querySelector(".profile__add-button"),document.querySelector(".profile__edit-button");var t=document.querySelector(".profile__name"),n=document.querySelector(".profile__about"),r=document.querySelector(".popup__form_type_edit"),o=(document.querySelector(".popup__form_type_add"),r.querySelector("#profile__name-input")),i=r.querySelector("#profile__about-input"),a=document.querySelector(".profile__avatar-mask"),u=document.querySelector(".profile__avatar-container"),c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkErorr",value:function(e){return e.ok?e.json():Promise.reject("Ошибка"+e.status)}},{key:"getCardList",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkErorr)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3","Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkErorr)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3"}}).then(this._checkErorr)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkErorr)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3","Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkErorr)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3","Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkErorr)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3"}}).then(this._checkErorr)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3"}}).then(this._checkErorr)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleClickCard=o,this._handleDeleteCard=i,this._handleLikeCard=a,this._currentUser=n,this._cardOwner=t.owner._id,this._id=t._id,this.likes=t.likes}var t,n;return t=e,(n=[{key:"checkLike",value:function(){var e=this;return this.likes.some((function(t){return t._id===e._currentUser}))}},{key:"_setLikeState",value:function(){this.checkLike()?this.setLike():this.removeLike()}},{key:"setLike",value:function(){this._cardLike.classList.add("element__like_pressed"),this._cardLikeCounter.textContent=this.likes.length}},{key:"removeLike",value:function(){this._cardLike.classList.remove("element__like_pressed"),this._cardLikeCounter.textContent=this.likes.length}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__photo"),this._cardCaption=this._element.querySelector(".element__caption"),this._cardLike=this._element.querySelector(".element__like"),this._cardLikeCounter=this._element.querySelector(".element__like-counter"),this._cardDelete=this._element.querySelector(".element__delete"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardCaption.textContent=this._name,this._cardOwner!==this._currentUser&&this._cardDelete.remove(),this._setLikeState(),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._handleLikeCard(e)})),this._cardDelete.addEventListener("click",(function(){e._handleDeleteCard(e)})),this._cardImage.addEventListener("click",(function(){e._handleClickCard(e._name,e._link)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleWrapperClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){e._handleWrapperClose(t)})),this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".photo-view__image"),t._caption=t._popup.querySelector(".photo-view__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._caption.textContent=t,this._image.src=n,this._image.alt=t,b(S(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function q(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._inputList=t._popup.querySelectorAll(".popup__input"),t._submitButton=t._popup.querySelector(".popup__submit"),t._form=t._popup.querySelector(".popup__form"),t._submitCallback=r,t}return t=a,(n=[{key:"setPending",value:function(){this._submitButton.textContent="Сохранение..."}},{key:"removePending",value:function(e){this._submitButton.textContent=e}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(){e._submitCallback(e._getInputValues())})),O(B(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){O(B(a.prototype),"close",this).call(this),this._form.reset()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function U(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitButton=t._popup.querySelector(".popup__submit"),t._submitCallback=r,t}return t=a,(n=[{key:"open",value:function(e){this.card=e,x(V(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("click",(function(){e._submitCallback()})),x(V(a.prototype),"setEventListeners",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector,i=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._nameInput=document.querySelector("".concat(n,"-input")),this._about=document.querySelector(r),this._aboutInput=document.querySelector("".concat(r,"-input")),this._avatar=document.querySelector(o),this._api=i}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._nameInput.value,about:this._aboutInput.value,avatar:this._avatar.src}}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._nameInput.textContent=t,this._about.textContent=n,this._aboutInput.textContent=n}}],n&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=document.querySelector(n),this._showFormButton=document.querySelector(r)}var r,a;return r=e,(a=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e,this._inputErrorClass,this._errorClass):this._showInputError(e,e.validationMessage,this._inputErrorClass,this._errorClass)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled","true")):(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this,r=Array.from(this._formElement.querySelectorAll(this._inputSelector)),a=this._formElement.querySelector(this._submitButtonSelector);this._toggleButtonState(r,a),r.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(r,a)}))})),this._showFormButton.addEventListener("click",(function(){e._showFormButton.classList.contains("profile__edit-button")?(o.value=t.textContent,i.value=n.textContent,e._toggleButtonState(r,a),Q.open()):e._showFormButton.classList.contains("profile__add-button")?(e._toggleButtonState(r,a),X.open()):e._showFormButton.classList.contains("profile__avatar-container")&&(e._toggleButtonState(r,a),Y.open())}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&G(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function H(e,t){return new p(e,t,"#card",(function(){return K.open({name:e.name,link:e.link})}),(function(e){return $.open(e)}),(function(t){t.checkLike()?W.removeLike(e._id).then((function(e){return t.likes=e.likes})).then((function(){return t.removeLike()})):W.likeCard(e._id).then((function(e){return t.likes=e.likes})).then((function(){return t.setLike()}))})).generateCard()}var W=new l({url:"https://mesto.nomoreparties.co/v1/cohort-41/",headers:{authorization:"1eb86aa4-a0d2-4f05-8adf-01200df0c7d3"}}),M=new _((function(e){M.addItem(H(e,"47bda8f44ba5fc95c27a71c9"))}),".elements__grid"),Z=new N({nameSelector:"#profile__name",aboutSelector:"#profile__about",avatarSelector:".profile__avatar",api:W}),K=new C(".photo-view"),Q=new I({popupSelector:".popup_type_edit",submitCallback:function(e){Q.setPending(),W.changeUserInfo(e).then((function(e){Z.setUserInfo(e),Q.close()})).catch((function(e){return console.log(e)})).finally((function(){return Q.removePending("Сохранить")}))}}),X=new I({popupSelector:".popup_type_add",submitCallback:function(e){X.setPending(),W.addCard(e).then((function(e){M.addItem(H(e,e.owner._id)),X.close()})).catch((function(e){return console.log(e)})).finally((function(){return X.removePending("Создать")}))}}),Y=new I({popupSelector:".popup_type_avatar",submitCallback:function(e){Y.setPending(),W.changeAvatar(e).then((function(){Z.setAvatar(e),Y.close()})).catch((function(e){return console.log(e)})).finally((function(){return Y.removePending("Сохранить")}))}}),$=new z({popupSelector:".popup_type_delete",submitCallback:function(){W.deleteCard($.card._id).then((function(){return $.card.deleteCard()})).then((function(){return $.close()})).catch((function(e){return console.log(e)}))}});new J(c,".popup__form_type_add",".profile__add-button").enableValidation(),new J(c,".popup__form_type_edit",".profile__edit-button").enableValidation(),new J(c,".popup__form_type_avatar",".profile__avatar-container").enableValidation(),Promise.all([W.getUserInfo(),W.getCardList()]).then((function(e){Z.setAvatar(e[0]),Z.setUserInfo(e[0]),M.renderItems(e[1].reverse())})).catch((function(e){return console.log(e)})),u.addEventListener("mouseenter",(function(){return a.classList.add("profile__avatar-mask_active")})),u.addEventListener("mouseleave",(function(){return a.classList.remove("profile__avatar-mask_active")})),K.setEventListeners(),Q.setEventListeners(),X.setEventListeners(),Y.setEventListeners(),$.setEventListeners()})();