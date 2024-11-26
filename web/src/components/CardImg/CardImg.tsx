import animatedBook from "../../assets/Animation - r1732616355714.json";
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
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '12px',
         borderTopLeftRadius: '12px'
      }}
    >
      <Player
        autoplay
        loop
        src={animatedBook} // Importado do JSON
        style={{ height: "300px", width: "300px" }} // Ajuste o tamanho conforme necessário
      />
    </div>
  );
}

export default CardImg
