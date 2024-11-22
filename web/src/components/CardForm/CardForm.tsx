import Date from "../../components/Date/Date";

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
        width: '400px',
        minHeight: "400px",
        minWidth: "400px",
        boxSizing: 'border-box'
      }}
    >
      <div className="headerCard" style={{ width: "100%" }}>
        <Date />
      </div>

      <h2>Cadastrar Novo Usuário</h2>
    </div>

  );
}

export default CardForm;
