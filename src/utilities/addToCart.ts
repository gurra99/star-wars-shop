import {getRandomNumber} from "./getRandomNumber";
import {IOrderItem} from "../model/order-item";
import {IOrder} from "../model/order";
import {IMovie} from "../model/movie";
import {SetCartType} from "../context/data-context";

export const addToCart = (movie: IMovie, cart: IOrder, setCart: SetCartType) => {
    if (orderExist(cart)) {
        updateExistingOrderInCart(movie, cart, setCart);
    } else {
        createNewOrderInCart(movie, cart, setCart);
    }
};

const orderExist = (cart: IOrder) => {
    return cart?.order_items?.length > 0
};

const orderItemExist = (cart: IOrder, movie: IMovie) => {
    return cart.order_items.some((orderItem: IOrderItem) => orderItem.product_id == movie.episode_id)
};

const updateExistingOrderInCart = (movie: IMovie, cart: IOrder, setCart: SetCartType) => {
    if (orderItemExist(cart, movie)) {
        updateOrderItem(cart, movie, setCart);
    } else {
        createNewOrderItem(movie, cart, setCart);
    }
};

const updateOrderItem = (cart: IOrder, movie: IMovie, setCart: SetCartType) => {
    const updatedOrderItems = cart.order_items.map((orderItem: IOrderItem) => {
        if (orderItem.product_id == movie.episode_id) {
            return {
                ...orderItem,
                quantity: orderItem.quantity + 1,
                total_price: orderItem.total_price * (orderItem.quantity + 1)
            }
        } else {
            return orderItem;
        }
    })
    const order = {...cart, order_items: updatedOrderItems}
    setCart(order as IOrder);
};

const createNewOrderItem = (movie: IMovie, cart: IOrder, setCart: SetCartType) => {
    const id = movie?.url?.match(/[0-9]+/g);

    const orderItems = [...cart.order_items, {
        id: id,
        order_id: cart.id,
        product_id: movie?.episode_id,
        title: movie.title,
        price: movie?.discount ? movie?.discount : (movie?.price || 0),
        quantity: 1,
        total_price: movie?.discount ? movie?.discount : (movie?.price || 0)
    } as IOrderItem]

    const order = {...cart, order_items: orderItems}
    setCart(order as IOrder);
};

const createNewOrderInCart = (movie: IMovie, cart: IOrder, setCart: SetCartType) => {
    const orderItem = {
        id: getRandomNumber(0, 500),
        order_id: getRandomNumber(0, 500),
        product_id: movie?.episode_id,
        title: movie.title,
        price: (movie?.discount ? movie?.discount : (movie?.price || 0)),
        quantity: 1,
        total_price: (movie?.discount ? movie?.discount : (movie?.price || 0))
    }
    const order = {id: getRandomNumber(0, 500), order_items: [orderItem]} as IOrder
    setCart(order as IOrder);
};
