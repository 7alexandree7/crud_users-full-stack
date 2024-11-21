import React from "react";
import animationLoading from "../../assets/Animation - 1732180142661.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
      }}
    >
      <div>
        <Player
          autoplay
          loop
          src={animationLoading} // Importado do JSON
          style={{ height: "380px", width: "380px" }} // Ajuste o tamanho conforme necessário
        />
      </div>
    </div>
  );
};

export default Loading;
