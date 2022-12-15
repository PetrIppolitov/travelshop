export interface ITicket{
    description: string;
    name: string;
    price: string;
    tourOperator: string;
    hotel: string;
}
export interface IVipTicket extends ITicket {
    vipNumber: number;
    vipStatus: string;
}
export type TicketType = IVipTicket | ITicket ;

export interface ITicketPostData {

}


