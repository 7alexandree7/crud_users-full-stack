import animatedBook from "../../assets/Animation - t1732243590674.json";
import { Player } from "@lottiefiles/react-lottie-player";

  function CardImg() {
  return (
    <div
      style={{
        height: '400px',
        width: '400px',
        minWidth: "400px",
        minHeight: '400px',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxSizing: 'border-box'
      }}
    >
      <Player
        autoplay
        loop
        src={animatedBook} // Importado do JSON
        style={{ height: "400px", width: "400px" }} // Ajuste o tamanho conforme necessário
      />
    </div>
  );
}

export default CardImg
