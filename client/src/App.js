import './App.css';
import MainPage from './Components/HomePage/MainPage';
import LoginForm from './Components/Login/LoginForm';
import Registration from './Components/Registration/RegForm';

function App() {
  return (
    <div>
      {/* <LoginForm email="balkrishan@123" password="password"/> */}

      {/* <Registration/>
        <hr style={{backgroundColor: "black",height: 2}}/>
    <LoginForm/> */}
    <MainPage/>
    </div>
  );
}

export default App;
