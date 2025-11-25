import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import { collections, onCollectionChange } from "../firebase";
import { getShopItemsOrdered, type ShopItem } from "../firebase/models/shop";

interface ShopContextType {
    shop: ShopItem[];
    setShop: (value: ShopItem[]) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export { ShopContext };


export function ShopProvider({ children }: { children: ReactNode }) {
    const [shop, setShop] = useState<ShopItem[]>([]);

    const loadShop = useCallback(async () => {
        setShop((await getShopItemsOrdered(["name"], ["asc"])));
    }, []);


    useEffect(() => {
        onCollectionChange(collections.shops, async () => {
            loadShop();
        });
    }, [loadShop]);


    return (
        <ShopContext.Provider value={{ shop, setShop }}>
            {children}
        </ShopContext.Provider>
    );

}