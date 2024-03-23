import React from "react";
import {addToCart} from "./addToCart";
import {toast} from "react-toastify";
import {SetCartType, SetTotalOrderPrice} from "../context/data-context";
import {IMovie} from "../model/movie";
import {IOrder} from "../model/order";

export const handleAddMovieToCart = (
    event: React.MouseEvent<HTMLElement>,
    movie: IMovie, cart: IOrder,
    setCart: SetCartType,
    setTotalOrderPrice: SetTotalOrderPrice) => {

    event.preventDefault();
    addToCart(movie, cart, setCart);
    setTotalOrderPrice((previous) => {
        return previous + (movie?.discount ? movie?.discount : (movie?.price || 0))
    });
    toast.success(`Added: ${movie.title}`)
};