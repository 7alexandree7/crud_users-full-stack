import Date from "../../components/Date/Date";
import Form from "../Form/Form";
import { User } from "../../App";

interface CardFormProps {
  users: User[];
  usersCount: number;
}

const CardForm: React.FC<CardFormProps> = ({ users, usersCount }) => {
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
      <Form users={users} usersCount={usersCount} />
    </div>
  );
};

export default CardForm;
