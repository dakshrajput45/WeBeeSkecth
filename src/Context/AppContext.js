import { createContext,useState } from "react";
import AnalyticsService from "../components/ServiceCompnent/AnalyticsService";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [service,setService] = useState(<AnalyticsService/>);
    const [active,setActive] = useState(false);

    const value = {
        service,
        setService,
        active,
        setActive,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}