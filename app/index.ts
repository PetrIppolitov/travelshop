import {getTours} from "@rest/tours";
import {Modal} from "./classess/modal";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {getTourTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist



initHeaderTitle('Туры', 'h2');
initFooterTitle('Туры по всему миру', 'h3');

// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
    toursDataArray = data;
    initToursDivElements(data);
});


// init app
function initToursDivElements(data: ITours[]) {

    if (Array.isArray(data)) {
        const rootElement = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');

        tourWrap.classList.add('tour-wrap');
// открываем модалку
        tourWrap.addEventListener('click', (ev) => {
            const targetItem = ev.target as HTMLElement; // куда тыкнули определили как нтмл элемент
            const parentItem =  (targetItem.parentNode as HTMLElement);// куда тыкнули определили родителя тоже как нтмл элемент
            let realTarget;// переменная реальная цель
            if (targetItem.hasAttribute('data-tour-item-index')) {  //если куда тыкнули если имеет класс дата тур
                realTarget = targetItem; // тогда переменная реальная цель равно элементу куда мы тыкнули
            } else if (parentItem.hasAttribute('data-tour-item-index')) { // куда тыкнули определили родителя имеет класс дата тур
                realTarget = parentItem;  // тогда переменная реальная цель равно родителю
            }

            if (realTarget) { // если мы получили нужную цель то
                const dataIndex = realTarget.getAttribute('data-tour-item-index');  // находим индекс и используем его для открытия модалки
                openModal('order', Number(dataIndex));
                }

        });


        let rootElementData = '';
        data.forEach((el, i) => {
            rootElementData += getTourTemplate(el, i);
        });


        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}


