import "../styles/globals.css";
import "../styles/Login.module.css";
import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { EventoContext } from "../contexts/evento";

function MyApp({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(false);
  const [evento, setEvento] = useState("0");

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <EventoContext.Provider value={{ evento, setEvento }}>
        <Component {...pageProps} />
      </EventoContext.Provider>
    </AuthContext.Provider>
  );
}

export default MyApp;
