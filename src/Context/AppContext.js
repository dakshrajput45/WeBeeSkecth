import { createContext,useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [active,setActive] = useState(false);

    const value = {
        active,
        setActive,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}