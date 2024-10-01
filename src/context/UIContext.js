import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const [ headerHeight, setHeaderHeight ] = useState(0);

    const handleChangeHeight = (height) => setHeaderHeight(height);

    const contextValue = {
        headerHeight,
        handleChangeHeight
    }

    return (
        <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
    )

}

export const useUI = () => useContext(UIContext);