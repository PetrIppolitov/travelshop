"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursDataArray = void 0;
var tours_1 = require("@rest/tours");
require("./assets/styles/main.scss");
var img_1 = require("@services/img/img");
var tours_2 = require("./templates/tours");
var modalService_1 = require("@services/modal/modalService");
var general_1 = require("@services/general/general");
exports.toursDataArray = [];
var imagesStore = img_1.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
(0, general_1.initHeaderTitle)('Туры', 'h1');
(0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
// init data
var tourData = (0, tours_1.getTours)();
tourData.then(function (data) {
    exports.toursDataArray = data;
    initToursDivElements(data);
});
// init app
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector('.main-app');
        var tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        // открываем модалку
        tourWrap.addEventListener('click', function (ev) {
            var targetItem = ev.target; // куда тыкнули определили как нтмл элемент
            var parentItem = targetItem.parentNode; // куда тыкнули определили родителя тоже как нтмл элемент
            var realTarget; // переменная реальная цель
            if (targetItem.hasAttribute('data-tour-item-index')) { //если куда тыкнули если имеет класс дата тур
                realTarget = targetItem; // тогда переменная реальная цель равно элементу куда мы тыкнули
            }
            else if (parentItem.hasAttribute('data-tour-item-index')) { // куда тыкнули определили родителя имеет класс дата тур
                realTarget = parentItem; // тогда переменная реальная цель равно родителю
            }
            if (realTarget) { // если мы получили нужную цель то
                var dataIndex = realTarget.getAttribute('data-tour-item-index'); // находим индекс и используем его для открытия модалки
                (0, modalService_1.openModal)('order', Number(dataIndex));
            }
        });
        var rootElementData_1 = '';
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_2.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        rootElement.appendChild(tourWrap);
    }
}
//# sourceMappingURL=index.js.map