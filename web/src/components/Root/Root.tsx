import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading.tsx";
import App from '../../App.tsx';


const Root: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    },2400)

    return () => clearTimeout(timer)
  },[])

  return isLoading ? <Loading /> : <App />
}


export default Root;