import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./Hook/useFetch";
import Header from "./Components/Header";
import CardTrilha from "./Components/CardTrilha/";


function App() {
  const [dados, isLoading] = useFetch("data/trilhas.json");
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="titulo">Trilhas de floripa.com</h1>
        {Array.isArray(trilhas) &&
          trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
      </div>
    </>
  );
}

export default App;