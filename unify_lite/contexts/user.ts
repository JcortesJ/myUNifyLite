import { createContext, useContext } from "react";

export type GlobalList = {
  user: string
  setUser:(c: string) => void
}
//en este codigo creamos el tipo global y definimos la variable y el metodo para
//actualizar
export const UserContext = createContext<GlobalList>({
    user: '0', // set a default value
    setUser: () => {},
})

export const useUser = () => useContext(UserContext)