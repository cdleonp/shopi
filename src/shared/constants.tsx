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


  