import animatedBook from "../../assets/Animation - t1732243590674.json";
import { Player } from "@lottiefiles/react-lottie-player";

  function CardImg() {
  return (
    <div
      style={{
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        height: '40px',
        width: '402px',
        minWidth: "402px",
        minHeight: '40px',
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
        style={{ height: "100%", width: "100%" }} // Ajuste o tamanho conforme necessário
      />
    </div>
  );
}

export default CardImg
