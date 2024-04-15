import { createContext, useState, useEffect } from "react";
import useFetch from "../Hook/useFetch";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
  const [dados, isLoading] = useFetch("/dados.json");
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!dados && !isLoading) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <TrilhasContext.Provider value={{trilhas, setTrilhas, isLoading}}>
      {children}
    </TrilhasContext.Provider>
  )
}