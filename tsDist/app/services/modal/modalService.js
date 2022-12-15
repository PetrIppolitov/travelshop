function openModal(id) {
    if (id === void 0) { id = null; }
    var template = "<div>ModalService</div>";
    var modal = new ModalService(id);
    modal.open(template);
}
function removeModal(id) {
    if (id === void 0) { id = null; }
    ModalService.removeById();
}
var ModalService = /** @class */ (function () {
    function ModalService(id) {
        if (id === void 0) { id = null; }
        var findModal = ModalService.modals.find(function (el) { return el.id === id; });
        if (findModal) {
            ModalService.removeById(this.id);
        }
        ModalService.modals.push(this);
        console.log("ModalService.modals", ModalService.modals);
        this.id = id || (Math.random() + ModalService.modals.length);
    }
    ModalService.prototype.open = function (template) {
        var divEl = document.createElement("div");
        divEl.innerHTML = template;
        divEl.id = this.id;
        divEl.setAttribute('modal_id', this.id);
        divEl.classList.add("modal_element");
        document.body.appendChild(divEl);
    };
    ;
    // public remove(): void {
    //     const modalEl = document.getElementById(this.id);
    //     modalEl.parentNode.removeChild(modalEl);
    // };
    ModalService.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = ModalService.modals.find(function (el) { return el.id === modalId; });
        if (findEl) {
            findEl.remove();
            ModalService.modals = ModalService.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(ModalService.modals)) {
                var lastEl = ModalService.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    ModalService.modals = []; // массив всех экземпляров класса modalService;
    return ModalService;
}());
var modalService = new ModalService();
console.log(modalService);
//# sourceMappingURL=modalService.js.map