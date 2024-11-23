import { ReactNode } from "react";

export type ReactTypes = {
    children: ReactNode;
}

export type ProductQuantityTypes = {
    id: number,
    price: number,
    quantity: number
}

export enum SideMenuTitleMapper {
    ProductDetail = "Detalles",
    CartItem = "Carrito",
    Order = "Orden",
    None = "",
}

export const apiUrl = 'https://fakestoreapi.com';
export const defaultImg = 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-acampada-de-otono.png';
  