import {ITours} from "../../models/tours";
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index";


// modal service logic
export function openModal (type, i: number) {
    const data: ITours = toursDataArray[i];
    const tourId = data[i]?.id;
    let modalInfo: ITours = <ITours>{};
    switch (type) {
        case "order":
            const modalTemplate = `
       <div>
       <div data-modal-id="tour-modal" class="close_modal"></div>
       <div class="description_modal">
           <p class="tour_name_modal">${data.name}</p>
           <p class="tour_description_modal">${data.description}</p>           
       </div>
       <div data-tour-id=${tourId} class="btn">
             <a class="ticket-submit" href="/ticket.html">Купить билет</a>
       </div>
       </div>
    `
    const modal = new Modal('tour-modal');
    modal.open(modalTemplate);
    break;
    }
}



