import { Cart } from "./cart";

export interface Order {
    id: string;
    items: Cart[];
    totalItems: number;
    totalPrice: number;
    date: string;
}