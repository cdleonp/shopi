import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Product } from "../../models/product";

type GlobalProviderTypes = {
    children: ReactNode;
}
type GlobalContextTypes = {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
    incrementCounter: () => void;
    isDetailOpen: boolean;
    openProductDetail: (product: Product) => void;
    closeProductDetail: () => void;
    selectedItem: Product | null;
    setSelectedItem: Dispatch<SetStateAction<Product | null>>;
}
const GlobalContext = createContext<GlobalContextTypes | null>(null);

function GlobalProvider({children}: GlobalProviderTypes) {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(prevState => prevState + 1);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const openProductDetail = (product: Product) => {
        setIsDetailOpen(true);
        setSelectedItem(product);
    }
    const closeProductDetail = () => setIsDetailOpen(false);
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);
    // console.log('Contador: ', counter);

    return (
        <GlobalContext.Provider value={{
            counter,
            setCounter,
            incrementCounter,
            isDetailOpen,
            openProductDetail,
            closeProductDetail,
            selectedItem,
            setSelectedItem,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }