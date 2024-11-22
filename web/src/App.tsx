import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import "./App.css";
import CardImg from "./components/CardImg/CardImg";
import CardForm from "./components/CardForm/CardForm";

const App: React.FC = () => {
  return (
    <div className="main">
      <ChangeFavicon />
      <ChangeTitle />
      <CardImg />
      <CardForm />
    </div>
  );
};

export default App;
