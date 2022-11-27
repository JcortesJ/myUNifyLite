import { createContext, useContext } from "react";


export type GlobalList = {
  evento: string;
  setEvento:(c: string) => void
}
export const EventoContext = createContext<GlobalList>({
    evento: '0', // set a default value
    setEvento: () => {},
})

export const useEvento = () => useContext(EventoContext)