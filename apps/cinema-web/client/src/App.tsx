import './Styles/css/App.css';
import AppRouter from './router/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;