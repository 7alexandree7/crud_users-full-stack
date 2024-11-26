import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import "./App.css";
import CardImg from "./components/CardImg/CardImg";
import api from "../services/api";
import { useEffect, useState } from "react";
import { Users2 } from "lucide-react";
import Date from "./components/Date/Date";

 interface User {
  id: number;
  name: string;
  age: string;
  profession: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);

  async function getUsers() {
    try {
      const response = await api.get<{ users: User[]; usersCont: number }>(
        "/users"
      );
      setUsers(response.data.users);
      setUsersCount(response.data.usersCont);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      console.log(users)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (

    <div className="main">
      <ChangeFavicon />
      <ChangeTitle />
      <CardImg />
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>
            Total de Usuários <span>{usersCount}</span>
          </h4>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
            }}
          >
            <Users2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
