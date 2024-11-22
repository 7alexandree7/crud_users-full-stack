import ChangeTitle from "./components/ChangeTitle/ChangeTitle";
import ChangeFavicon from "./components/ChangeFavicon/ChangeFavicon";
import './App.css';
import Date from "./components/Date/Date";

const App: React.FC = () => {

  return (  
    <div className="main">
      <ChangeFavicon />
      <ChangeTitle />

      <div style={{
        backgroundColor: '#4A90E2',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px'
      }}>
        <div className="headerCard" style={{width: '100%'}}>
          <Date/>
        </div>
        
      <h1>Bem-vindo ao App Principal!</h1>
      </div>
    </div>
  );
};

export default App;
