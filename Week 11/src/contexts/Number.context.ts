import { createContext } from "react";

const NumberContext = createContext([1, 2, 3, 4, 5])

const Provider = NumberContext.Provider

export {
    Provider,
    NumberContext
}