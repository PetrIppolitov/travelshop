"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTourTemplate = void 0;
function getTourTemplate(obj, i) {
    var tmpl = "\n       <div  data-tour-item-index=".concat(i, " class=\"tour-block\">\n           <h2 class=\"tour_name\">").concat(obj.name, "</h2>\n           <img class=\"tour_pic\" src=\"/dist/").concat(obj.img, "\"/>\n           <div class=\"ticket_description\">").concat(obj.description, "</div>\n           <div class=\"tour_price\">").concat(obj.price, "</div>\n       </div>\n    ");
    return tmpl;
}
exports.getTourTemplate = getTourTemplate;
//# sourceMappingURL=tours.js.map