import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading.tsx";
import App from '../../App.tsx';

const Root: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer); // Limpeza do temporizador
    }, []);
  
    return isLoading ? <Loading /> : <App />;
  };


export default Root;