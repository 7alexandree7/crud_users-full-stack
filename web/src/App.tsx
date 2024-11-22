import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import './App.css'

const App: React.FC = () => {

  return (  
    <div>
      <ChangeFavicon />
      <ChangeTitle />
      <h1>Bem-vindo ao App Principal!</h1>
    </div>
  );
};

export default App;
