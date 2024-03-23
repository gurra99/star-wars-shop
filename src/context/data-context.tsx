import React, {ReactNode, useState} from "react";
import {IOrder} from "../model/order";

type CartType = {
    cart: IOrder;
    setCart: SetCartType;
    totalOrderPrice: number;
    setTotalOrderPrice: (price: (value: number) => number) => void;
    characterList: string[];
    setCharacterList: (character: (value: string[]) => string[]) => void;
}

export type SetCartType = (order: IOrder) => void;
export type SetTotalOrderPrice = (price: (value: number) => number) => void;

interface Props {
    children: React.ReactNode;
}

const DataContext = React.createContext<CartType>({
    cart: {} as IOrder,
    setCart: () => {},
    totalOrderPrice: 0,
    setTotalOrderPrice: () => {},
    characterList: [],
    setCharacterList: () => {},
})

export const DataProvider: React.FC<Props> = ({children}: { children: ReactNode }): React.ReactElement => {
    const [cart, setCart] = useState<IOrder>({} as IOrder)
    const [totalOrderPrice, setTotalOrderPrice] = useState<number>(0);
    const [characterList, setCharacterList] = useState<string[]>([] as string[])

    return (
        <DataContext.Provider
            value={{cart, setCart, totalOrderPrice, setTotalOrderPrice, characterList, setCharacterList}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;