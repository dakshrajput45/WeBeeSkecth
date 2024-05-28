import { createContext,useState } from "react";
import AnalyticsService from "../components/ServiceCompnent/AnalyticsService";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [service,setService] = useState(<AnalyticsService/>);

    const value = {
        service,
        setService
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}