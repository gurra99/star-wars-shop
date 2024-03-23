import React, {useContext, useEffect, useState} from "react";
import DataContext from "../../context/data-context";
import {Text} from "../../App.styles";
import {Container, Header, TotalPrice} from "./cart.styles";
import {IOrderItem} from "../../model/order-item";
import CartItem from "./cart-item/cart-item";

const Cart = () => {
    const {cart, totalOrderPrice} = useContext(DataContext);
    const [sortedCart, setSortedCart] = useState<IOrderItem[]>([]);

    useEffect(() => {
        sortCart();
    }, [cart, totalOrderPrice])

    const sortCart = () => {
        if (cart?.order_items?.length > 0) {
            const sortedCart = cart.order_items.sort(function (a, b) {
                return a.id - b.id;
            });
            setSortedCart(sortedCart);
        }
    };

    const cartIsEmpty = () => {
        return cart?.order_items?.length <= 0 || !cart?.order_items
    };

    return (
        <Container>
            <Header className="secondary-heading">Cart</Header>
            {
                cartIsEmpty() &&
                <Text align={"center"}>Your cart is empty</Text>
            }

            {
                !cartIsEmpty() &&
                sortedCart.map((item: IOrderItem, index: number) => {
                    return <CartItem key={index} product={item} index={index}/>
                })
            }

            {
                !cartIsEmpty() &&
                <TotalPrice> Total price: {totalOrderPrice} Kr</TotalPrice>
            }
        </Container>
    );
};

export default Cart;