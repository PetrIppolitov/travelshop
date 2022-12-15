import {ITours} from "../models/tours";
import {images} from "@services/img/img";

export function getTourTemplate(obj: ITours, i): string {
    const tmpl = `
       <div  data-tour-item-index=${i} class="tour-block">
           <h2 class="tour_name">${obj.name}</h2>
           <img class="tour_pic" src="/dist/${obj.img}"/>
           <div class="ticket_description">${obj.description}</div>
           <div class="tour_price">${obj.price}</div>
       </div>
    `
    return tmpl;
}