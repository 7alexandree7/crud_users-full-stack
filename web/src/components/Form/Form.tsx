import Date from "../../components/Date/Date";
import { useRef } from "react";
import api from "../../../services/api";
import DialogUsers from "../DialogUsers/DialogUsers";
import { User } from "../../App";

interface FormProps {
  usersCount: number;
  fetchUsers: () => Promise<void>;
  users: User[]
}

const Form: React.FC<FormProps> = ({ usersCount, fetchUsers, users }) => {
  const inputName = useRef<any>();
  const inputAge = useRef<any>();
  const inputProfession = useRef<any>();

  function preventEvent(event: any) {
    event.preventDefault();
  }

  async function createUser() {
    await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
      profession: inputProfession.current.value,
    });
    fetchUsers();
  }

  async function deleteUsers(id: number) {
    await api.delete(`/users/${id}`)
    fetchUsers();
}

  return (
    <div className="form-content"
    >
      <div className="headerCard" style={{ width: "100%" }}>
        <Date />
      </div>
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

        <form onSubmit={preventEvent}>
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
                ref={inputName}
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
                ref={inputAge}
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
                ref={inputProfession}
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
            <button onClick={createUser} className="ss">
              Cadastrar
            </button>
            <input className="ss dd" type="reset" value="Limpar Campos" />
          </div>
        </form>
      </div>

      <div className="content-count-users"
      >
        <h4>
          Total de Usuários <span>{usersCount}</span>
        </h4>
        <DialogUsers users={users}  deleteUsers={deleteUsers}/>
      </div>
    </div>
  );
};

export default Form;
