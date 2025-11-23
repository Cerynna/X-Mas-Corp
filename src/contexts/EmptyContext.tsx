import { createContext, useState, type ReactNode } from "react";

interface EmptyContextType {
    data: string
    setData: (value: string) => void;
}

const EmptyContext = createContext<EmptyContextType | undefined>(undefined);

export { EmptyContext };


export function EmptyProvider({ children }: { children: ReactNode }) {

    const [data, setData] = useState<string>("");
    return (
        <EmptyContext.Provider value={{ data, setData }}>
            {children}
        </EmptyContext.Provider>
    );

}