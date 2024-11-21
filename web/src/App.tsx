import React, { useState, useEffect } from "react";

interface Data {
  message: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma requisição
    setTimeout(() => {
      setData({ message: "Dados carregados com sucesso!" });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  return (
    <div>
      <h1>Bem-vindo ao App Principal!</h1>
      <p>{data?.message}</p>
    </div>
  );
};

export default App;
