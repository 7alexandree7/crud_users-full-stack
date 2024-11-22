import animatedBook from "../../assets/Animation - 1732242102996.json";
import { Player } from "@lottiefiles/react-lottie-player";

  function CardImg() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        padding: "2rem",
        height: "400px",
        minWidth: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
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
