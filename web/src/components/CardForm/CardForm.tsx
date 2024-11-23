import Date from "../../components/Date/Date";
import Form from "../Form/Form";

function CardForm() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        height: "400px",
        width: "400px",
        minHeight: "400px",
        minWidth: "400px",
        boxSizing: "border-box",
      }}
    >
      <div className="headerCard" style={{ width: "100%" }}>
        <Date />
      </div>
      <Form />
    </div>
  );
}

export default CardForm;
