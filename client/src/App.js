import './App.css';
import LoginForm from './Components/Login/LoginForm';
import Main_page from './Components/HomePage/Main_page';

function App() {
  return (
    <div>
      <Main_page/>
      <LoginForm email="balkrishan@123" password="password"/>
    </div>
  );
}

export default App;
