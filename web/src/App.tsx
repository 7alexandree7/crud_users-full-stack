import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import "./App.css";
import CardImg from "./components/CardImg/CardImg";
import CardForm from "./components/CardForm/CardForm";
import api from "../services/api";
import { useEffect, useState } from "react";

export interface User {
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
      const response = await api.get<{ users: User[]; usersCont: number }>("/users");
      setUsers(response.data.users);
      setUsersCount(response.data.usersCont);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
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
      <CardForm users={users} usersCount={usersCount} />
    </div>
  );
};

export default App;
