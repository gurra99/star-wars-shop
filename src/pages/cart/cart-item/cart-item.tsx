import React, {useContext, useEffect, useState} from "react";
import DataContext from "../../../context/data-context";
import {
    ButtonContainer, Container, Image, InformationContainer,
    Text, ProductNameContainer, PriceContainer, QuantityContainer
} from "./cart-item.styles";
import {dimensionsNumber} from "../../../utilities/dimensions";
import {useWindowWide} from "../../../components/hooks/use-window-width";
import {toast} from "react-toastify";
import {RemoveButton} from "../../../components/fragments/remove-button/remove-button";
import QuantityInput from "../../../components/fragments/quantity-input/quantity-input";
import {IOrderItem} from "../../../model/order-item";
import {IOrder} from "../../../model/order";

interface CartItemProps {
    product: IOrderItem;
    index: number;
}

const CartItem = (props: CartItemProps) => {
    const {cart, setCart, setTotalOrderPrice} = useContext(DataContext);
    const {product, index} = props;
    const windowWidth = useWindowWide();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setCartTotalPrice();
    }, [cart.order_items])

    const handleQuantityChange = (quantity: number) => {
        const updatedOrderItems = updateOrderItemTotalPrice(quantity);
        const updatedCart = {...cart, order_items: updatedOrderItems}
        setCart(updatedCart as IOrder);
    };

    const updateOrderItemTotalPrice = (quantity: number) => {
        return cart.order_items.map((orderItem: IOrderItem) => {
            if (orderItem.product_id == product.product_id && quantity > 0) {
                return {...orderItem, quantity: quantity, total_price: product.price * quantity}
            } else {
                return orderItem;
            }
        })
    };

    const setCartTotalPrice = () => {
        setTotalOrderPrice(() => 0);
        cart.order_items.map((orderItem: IOrderItem) => {
            setTotalOrderPrice(previous => previous + orderItem.total_price);
        })
    };

    const handleRemove = () => {
        setIsVisible(false);


            setTimeout(() => {
                cart.order_items.splice(index, 1);
                const updatedCart = {...cart}
                setCart(updatedCart);
                setCartTotalPrice();
                toast.success(`Removed: ${product?.title}`)
                setIsVisible(true);
            }, 500);





    };

    return (
        <>
            <Container className={`${isVisible ? "" : "fade-out-element"}`}>
                <Image
                    src={`/movie-card-images-800/${product?.product_id}.jpg`}
                    srcSet={`/movie-card-images-600/${product?.product_id}.jpg 600w,
                /movie-card-images-800/${product?.product_id}.jpg 800w,
                /movie-card-images-1000/${product?.product_id}.jpg 972w`
                    }
                    alt="product-poster"
                />
                <InformationContainer>
                    <ProductNameContainer>
                        {windowWidth > dimensionsNumber.mediumDevices &&
                        <Text data-cy="product-name">Product name:</Text>}
                        <Text text-align={"left"}>{product?.title}</Text>
                    </ProductNameContainer>
                    <PriceContainer>
                        <Text>Price:</Text>
                        <Text>{product?.total_price} Kr</Text>
                    </PriceContainer>
                    <QuantityContainer>
                        <QuantityInput
                            quantity={product?.quantity}
                            handleQuantityChange={handleQuantityChange}
                        />
                    </QuantityContainer>
                    <ButtonContainer>
                        <RemoveButton onClickAddToList={handleRemove} description={"Remove"}/>
                    </ButtonContainer>
                </InformationContainer>
            </Container>
        </>

    );
};

export default CartItem;