import { createContext, useContext } from "react";


export type GlobalList = {
  idBusqueda: string;
  setIdBusqueda:(c: string) => void
}
export const IdBusquedaContext = createContext<GlobalList>({
    idBusqueda: '0', // set a default value
    setIdBusqueda: () => {},
})

export const useIdBusqueda = () => useContext(IdBusquedaContext)