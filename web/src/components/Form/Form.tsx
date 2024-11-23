import {  Users2 } from "lucide-react";
import "../../index.css";

function Form() {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          borderRadius: "12px",
          backgroundColor: "#1A1A1A",
          color: "#fff",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <h2>Cadastrar Novo Usuário</h2>
        </div>

        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <label>
              Nome:
              <input
                className="tt"
                type="text"
                name="nome"
                id="nome"
                required
                autoFocus
              />
            </label>
            <label>
              Idade:
              <input
                className="tt"
                type="number"
                name="idade"
                id="idade"
                required
              />
            </label>
            <label>
              Profissão
              <input
                className="tt"
                type="text"
                name="profissao"
                id="profissao"
                required
                style={{
                  marginBottom: "2rem",
                }}
              />
            </label>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input className="ss" type="submit" value="Cadastrar" />
            <input className="ss dd" type="reset" value="Limpar Campos" />
          </div>
        </form>
      </div>

      <div
        style={{
          padding: "1rem",
          borderRadius: "12px",
          backgroundColor: "#1A1A1A",
          color: "#fff",
          marginTop: "1.5rem",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h4>
          Total de Usuários <span>(0)</span>
        </h4>
        <Users2 />
      </div>
    </>
  );
}

export default Form;
