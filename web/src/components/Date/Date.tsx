import animatedDate from "../../assets/Animation - a1732259528592.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface Idate {
  getDate: () => number;
  getMonth: () => number;
  getFullYear: () => number;
  getHours: () => number;
  getMinutes: () => number;
}

function Date() {
  const date: Idate = new globalThis.Date();

  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        backgroundColor: "#1A1A1A",
        padding: "14px 20px",
        borderRadius: "12px",
        color: "#fff",
      }}
    >
      <p>
        {" "}
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}{" "}
      </p>
      <Player
        autoplay
        loop
        src={animatedDate} // Importado do JSON
        style={{ height: "120px", width: "120px" }} // Ajuste o tamanho conforme necessário
      />
      <p>
        {date.getHours() <= 10 ? "0" + date.getHours() : date.getHours()} /
        {date.getMinutes() >= 10
          ? " " + date.getMinutes()
          : " 0" + date.getMinutes()}
      </p>
    </div>
  );
}

export default Date;
