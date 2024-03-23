import {IOrderItem} from "./order-item";

export interface IOrder {
    id: number;
    customer_id?: string;
    total_price?: number;
    order_items: IOrderItem[];
};
