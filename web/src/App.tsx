import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import "./App.css";
import CardImg from "./components/CardImg/CardImg";
import api from "../services/api";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";

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
      const response = await api.get<{ users: User[]; usersCont: number }>(
        "/users"
      );
      setUsers(response.data.users);
      setUsersCount(response.data.usersCont);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      console.log(users);
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
      <Form  usersCount={usersCount} fetchUsers={getUsers} users={users}/>
    </div>
  );
};

export default App;
