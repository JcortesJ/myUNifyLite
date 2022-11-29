import "../styles/globals.css";
import "../styles/Login.module.css";
import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { IdBusquedaContext } from "../contexts/idBusqueda";
import { UserContext } from "../contexts/user";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(false);
  const [idBusqueda, setIdBusqueda] = useState("0");
  const [user, setUser] = useState('0');
 //.Provider permite que todas las paginas puedan acceder a estas variables globales
 //se define aqui por que esta es la pagina raiz de la aplicación.
  return (
    <UserContext.Provider value={{ user, setUser}}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <IdBusquedaContext.Provider value={{ idBusqueda, setIdBusqueda }}>
          <Component {...pageProps} />
        </IdBusquedaContext.Provider>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
