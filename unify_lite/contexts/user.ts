import { createContext, useContext } from "react";

export type GlobalList = {
  user: string
  setUser:(c: string) => void
}
export const UserContext = createContext<GlobalList>({
    user: '0', // set a default value
    setUser: () => {},
})

export const useUser = () => useContext(UserContext)