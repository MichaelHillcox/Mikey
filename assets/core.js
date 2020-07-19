"use strict";// Holds the base code for the app / website.
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var appModal=/*#__PURE__*/function(){function appModal(){var _this=this;_classCallCheck(this,appModal);this.triggers=document.querySelectorAll("[data-trigger]");this.triggers.forEach(function(x){return x.addEventListener("click",_this.openEvent.bind(_this,x))});this.setupModals()}// Handle modal opening
_createClass(appModal,[{key:"openEvent",value:function openEvent(e){var target=document.querySelector(e.getAttribute("data-trigger"));if(target==null)return;target.classList.add("active");setTimeout(function(e){return target.classList.add("pretty")},100)}// Handle modal closing
},{key:"closeEvent",value:function closeEvent(modal){modal.classList.remove("pretty");setTimeout(function(e){return modal.classList.remove("active")},300)}// Setup modals, add closer events and add click off watcher
},{key:"setupModals",value:function setupModals(){var _this2=this;var modals=document.querySelectorAll(".modal");modals.forEach(function(e){var closers=e.querySelectorAll("[data-closer]");closers.forEach(function(a){return a.addEventListener("click",_this2.closeEvent.bind(_this2,e))});e.addEventListener("click",function(a){if(a.target!==a.currentTarget)return;_this2.closeEvent(e)})})}}]);return appModal}();var app=new appModal;