import "../styles/globals.css";
import "../styles/Login.module.css";
import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { EventoContext } from "../contexts/evento";
import { UserContext } from "../contexts/user";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(false);
  const [evento, setEvento] = useState("0");
  const [user, setUser] = useState('0');
 //.Provider permite que todas las paginas puedan acceder a estas variables globales
 //se define aqui por que esta es la pagina raiz de la aplicación.
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <EventoContext.Provider value={{ evento, setEvento }}>
          <Component {...pageProps} />
        </EventoContext.Provider>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
