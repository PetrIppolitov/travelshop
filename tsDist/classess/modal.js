"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        var _this = this;
        this.closeModalFunction = function (ev) {
            var targetItem = ev.target;
            if (targetItem.classList.contains('close_modal')) {
                _this.remove();
            }
        };
        var findModal = Modal.modals.find(function (el) { return el.id === id; });
        if (findModal) {
            Modal.removeById(this.id);
        }
        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }
    Modal.prototype.open = function (template) {
        var divEl = document.createElement("div");
        divEl.innerHTML = template;
        divEl.id = this.id;
        divEl.setAttribute('modal_id', this.id);
        divEl.classList.add("modal_element");
        divEl.addEventListener('click', this.closeModalFunction); // функции  у меня такой нет
        document.body.appendChild(divEl);
    };
    ;
    Modal.prototype.remove = function () {
        var modalEl = document.getElementById(this.id);
        if (modalEl) {
            modalEl.removeEventListener('click', this.closeModalFunction);
            modalEl.parentNode.removeChild(modalEl);
        }
    };
    ;
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = Modal.modals.find(function (el) { return el.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(Modal.modals)) {
                var lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    Modal.modals = []; // массив всех экземпляров класса Modal;
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map