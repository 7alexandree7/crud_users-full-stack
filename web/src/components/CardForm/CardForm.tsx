import Date from "../../components/Date/Date";

function CardForm() {

  return (

    <div
      style={{
        backgroundColor: "#4A90E2",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        minHeight: "400px",
        minWidth: "500px",
      }}
    >
      <div className="headerCard" style={{ width: "100%" }}>
        <Date />
      </div>

      <h1>Cadastrar Novo Usuário</h1>
    </div>

  );
}

export default CardForm;
